/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect, useRef } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { IUser } from '../../models/interfaces';
import { commonApi } from '../../store';
import Modal from '../atoms/Modal';
import ReCAPTCHA from "react-google-recaptcha";
import Loading from '../atoms/loading';
import styles from './Contacts.module.css'
import Error from '../atoms/Modal/Error'
import PhoneInput from "react-phone-number-input/react-hook-form-input"
import { isPossiblePhoneNumber } from 'react-phone-number-input'
// import { isValidPhoneNumber } from 'react-phone-number-input'

const ContactsForm: FC = () => {

   const {
      register,
      handleSubmit,
      reset,
      control,
      clearErrors,
      formState: { errors, isValid },
   } = useForm({
      mode: "onBlur"
   });

   const captchaRef = useRef<ReCAPTCHA>(null);
   const [regUser, { error, isLoading, data: res }] = commonApi.useRegUserMutation();
   const [isModalActive, setModalActive] = useState(false);
   const [isErrorModal, setErrorModal] = useState(false);
   const [isErrorMessage, setErrorMessage] = useState('');


   useEffect(() => {
      if (error && 'data' in error) {
         setErrorMessage(error.data.message);
         setErrorModal(true);
      } else {
         setErrorModal(false);
      }
   }, [error]);

   useEffect(() => {
      if (res) {
         const a = "Ваша заявка принята";
         setErrorMessage(a);
         setModalActive(true);
      }
      else {
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
            token: tokenQ
         };
         await regUser(userData).unwrap();
         // console.log(tokenQ)
         captchaRef.current!.reset();
         reset();
      }
   }
   return (
      <div>
         {isModalActive && (
            <Modal message={isErrorMessage} close={() => setModalActive(false)} />

         )}
         {isErrorModal && (
            <Error message={isErrorMessage} close={() => setErrorModal(false)} />
         )}
         <form onSubmit={handleSubmit(submitForm)} className={styles.formContainer}>
            <input
               type="text"
               className={styles.input + ' ' + (errors.name ? styles.inputError : '')}
               {...register('name', {
                  minLength: 2,
                  maxLength: 100,
                  required: "Поле имя должно быть заполненным"
               })}
               onInput={() => clearErrors('name')}
               placeholder="Имя" />
            {errors?.name && (
              <div  className={styles.errorDiv}> {errors.name.message as string || "Укажите имя от 2 до 100 символов"} </div>
            )}

            <input type="email"
               className={styles.input + ' ' + (errors.email ? styles.inputError : '')}
               {...register('email', {
                  minLength: 4,
                  // eslint-disable-next-line no-control-regex
                  pattern: /^[\w.%+-]+@[\w.-]+\.[a-zA-Zа-яА-Я]{2,}$/,
                  required: "поле E-mail должно быть заполненно "
               })}
               onInput={() => clearErrors('email')}
               placeholder="E-mail" />
            {errors?.email && (
               <div  className={styles.errorDiv}>{errors.email.message as string || "Введите корректный E-mail"} </div>
            )}

            <PhoneInput
               name="phoneInput"
               control={control}
               rules={{ required: true, validate: isPossiblePhoneNumber }}
               placeholder="Телефон"
               onInput={() => clearErrors('phoneInput')}
               className={styles.input + ' ' + (errors.phone ? styles.inputError : '')}
            />

            {errors?.phoneInput && (
               <div  className={styles.errorDiv}>  {errors.phoneInput.message as string || "Телефон должен быть в формате +xxxxxxxxxxx"} </div>
            )}

            <textarea {...register('description', { required: true,  maxLength: 500 })}
              onInput={() => clearErrors('description')}
               placeholder="Короткое описание проекта" />

            {errors?.description && (
               <div  className={styles.errorDiv}>  {errors.description.message as string || "дабавьте описание проекта до 500 символов"} </div>
            )}

            <div className={styles.divButton}>
               <button disabled={!isValid}
                  className={styles.button + ' ' + (isLoading ? styles.loading : '')} type="submit">{isLoading ? <Loading /> : null} Отправить</button>

               <ReCAPTCHA
                  className={styles.captcha}
                  ref={captchaRef}
                  size="invisible"
                  sitekey={process.env.REACT_APP_SITE_KEY as string}
               />
               <div>Нажимая кнопку
                  вы соглашаетесь на обработку
                  персональных данных</div>
            </div>
         </form>
      </div>
   );
};
export default ContactsForm;