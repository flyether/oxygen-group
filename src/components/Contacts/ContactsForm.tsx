/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect, useRef } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input/react-hook-form-input';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import cn from 'classnames';

import { IUser } from '../../models/interfaces';
import { commonApi } from '../../store';
import Modal from '../atoms/Modal';
import Loading from '../atoms/loading';
import Error from '../atoms/Modal/Error';

import styles from './Contacts.module.css';

const ContactsForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    clearErrors,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const captchaRef = useRef<ReCAPTCHA>(null);
  const [regUser, { error, isLoading, data: res }] = commonApi.useRegUserMutation();
  const [isModalActive, setModalActive] = useState(false);
  const [isErrorModal, setErrorModal] = useState(false);
  const [focusStyleName, setFocusStyleName] = useState(false);
  const [focusStyleEmail, setFocusStyleEmail] = useState(false);
  const [focusStylePhone, setFocusStylePhone] = useState(false);
  const [focusStyle, setFocusStyle] = useState(false);

  useEffect(() => {
    if (error && 'data' in error) {
      setErrorModal(true);
    } else {
      setErrorModal(false);
    }
  }, [error]);

  useEffect(() => {
    if (res) {
      setModalActive(true);
    } else {
      setErrorModal(false);
    }
  }, [res]);

  const submitForm = async (data: FieldValues) => {
    const tokenQ = await captchaRef?.current?.executeAsync();

    if (tokenQ) {
      const userData: IUser = {
        name: data.name,
        email: data.email,
        phone: data.phoneInput,
        description: data.description,
        token: tokenQ,
      };
      await regUser(userData).unwrap();
      captchaRef.current!.reset();
      reset();
    }
  };

  if (isErrorModal) {
    return <Error close={() => setErrorModal(false)} />;
  }

  if (isModalActive) {
    return <Modal message={'Ваша заявка принята'} close={() => setModalActive(false)} />;
  }
  console.log(isModalActive);
  return (
    <div className={styles.form__container}>
      <h1 className={styles.heading}>Свяжитесь с нами</h1>
      <form onSubmit={handleSubmit(submitForm)} className={styles.form__content}>
        <input
          type="text"
          className={cn(styles.input, {
            [styles.inputError]: errors.name,
            [styles.focusStyle]: focusStyleName,
          })}
          {...register('name', {
            minLength: 2,
            maxLength: 100,
            required: 'Поле «Имя» должно быть заполнено',
            pattern: /^[a-zA-Zа-яА-Я\s-\']{1,}[a-zA-Zа-яА-Я']{1,}$/,
          })}
          onInput={() => clearErrors('name')}
          onFocus={() => setFocusStyleName(true)}
          onBlur={() => {
            setFocusStyleName(false);
            trigger('name'); // trigger validation onBlur
          }}
          placeholder="Имя"
        />

        <div className={styles.errorDivWrapper}>
          {errors?.name && (
            <div className={styles.errorDiv}>
              {' '}
              {(errors.name?.message as string) ||
                'Имя должно быть от 2 символов и содержать только буквы'}{' '}
            </div>
          )}
        </div>
        <input
          type="email"
          className={cn(styles.input, {
            [styles.inputError]: errors.email,
            [styles.focusStyle]: focusStyleEmail,
          })}
          {...register('email', {
            minLength: 4,
            // eslint-disable-next-line no-control-regex
            pattern: /^[\w.%+-]+@[\w.-]+\.[a-zA-Zа-яА-Я]{2,}$/,
            required: 'Поле «E-mail» должно быть заполнено',
          })}
          onInput={() => clearErrors('email')}
          onFocus={() => setFocusStyleEmail(true)}
          onBlur={() => {
            setFocusStyleEmail(false);
            trigger('email'); // trigger validation onBlur
          }}
          placeholder="E-mail"
        />

        <div className={styles.errorDivWrapper}>
          {errors?.email && (
            <div className={styles.errorDiv}>
              {(errors.email?.message as string) || 'Введите корректный E-mail'}{' '}
            </div>
          )}
        </div>
        <PhoneInput
          name="phoneInput"
          control={control}
          rules={{
            required: 'Поле «Телефон» должно быть заполнено',
            validate: isPossiblePhoneNumber,
          }}
          placeholder="Телефон"
          onInput={() => clearErrors('phoneInput')}
          onFocus={() => setFocusStylePhone(true)}
          onBlur={() => setFocusStylePhone(false)}
          className={cn(styles.input, {
            [styles.inputError]: errors.phoneInput,
            [styles.focusStyle]: focusStylePhone,
          })}
        />
        <div className={styles.errorDivWrapper}>
          {errors?.phoneInput && (
            <div className={styles.errorDiv}>
              {' '}
              {(errors.phoneInput?.message as string) || 'Введите корректный номер'}{' '}
            </div>
          )}
        </div>
        <textarea
          className={cn(styles.form__textarea, {
            [styles.inputError]: errors.description,
            [styles.focusStyle]: focusStyle,
          })}
          {...register('description', {
            required: 'Поле «Описание» должно быть заполнено',
            minLength: 1,
            maxLength: 500,
          })}
          onInput={() => clearErrors('description')}
          onFocus={() => setFocusStyle(true)}
          onBlur={() => {
            trigger('description');
            setFocusStyle(false);
          }}
          placeholder="Короткое описание проекта"
        />
        <div className={styles.errorDivWrapper}>
          {errors?.description && (
            <div className={styles.errorDiv}>
              {(errors.description.message as string) ||
                'Описание должно быть не более 500 символов'}
            </div>
          )}
        </div>
        <div className={styles.privacy_policy}>
          <button
            className={cn(styles.button, {
              [styles.loading]: isLoading,
            })}
            type="submit"
          >
            {isLoading ? <Loading /> : 'Отправить'}
          </button>
          <ReCAPTCHA
            className={styles.captcha}
            ref={captchaRef}
            size="invisible"
            sitekey={process.env.REACT_APP_SITE_KEY as string}
          />
          <div className={styles.privacy_policy__text}>
            Нажимая кнопку, вы соглашаетесь на&nbsp;обработку
            <Link
              to="/privacy_policy"
              className={styles.privacy_policy__link}
              style={{
                color: '#1e31dc',
              }}
              target="_blank"
            >
              персональных данных
            </Link>
          </div>
        </div>
        {/* {isModalActive && (
          <Modal message={'Ваша заявка принята'} close={() => setModalActive(false)} />
        )} */}
      </form>
    </div>
  );
};
export default ContactsForm;
