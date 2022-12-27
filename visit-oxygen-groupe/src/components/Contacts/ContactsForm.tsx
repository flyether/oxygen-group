/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect, useRef } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { IUser, IСaptcha } from '../../models/interfaces';
import { commonApi } from '../../store';
import Modal from '../atoms/Modal';
import ReCAPTCHA from "react-google-recaptcha";
import Loading from '../atoms/loading';
import styles from './Contacts.module.css'
import Error from './Error'
// import 'dotenv/config'

// dotenv.config()
const ContactsForm: FC = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isValid },
   } = useForm({
      mode: "onBlur"
   });

   const captchaRef = useRef<ReCAPTCHA>(null);

   const [regUser, { error, isLoading, data: res }] = commonApi.useRegUserMutation();
   const [isModalActive, setModalActive] = useState(false);
   const [isErrorModal, setErrorModal] = useState(false);
   const [isErrorMessage, setErrorMessage] = useState('');
   const [captcha, { error: eer1, isLoading: islod2, data: ddd }] = commonApi.useCaptchaMutation()
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
      if (captchaRef.current!.getValue()) {
         const token: IСaptcha = { token: captchaRef.current!.getValue() as string }
         // await captchaRef?.current?.executeAsync();


         const userData: IUser = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            description: data.description
         };
         await regUser(userData).unwrap();
         await captcha(token).unwrap();
         console.log(ddd)
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
                  required: "Поле имя должно быть заполненным"
               })}
               onInput={() => setErrorModal(false)}
               placeholder="Имя" />
            {errors?.name && (
               <Error message={errors.name.message as string || "Укажите имя не мение 2х символов"} close={() => setErrorModal(false)} />
            )}

            <input type="email"
               className={styles.input + ' ' + (errors.email ? styles.inputError : '')}
               {...register('email', {
                  minLength: 4,
                  // eslint-disable-next-line no-control-regex
                  pattern: /^[\w.%+-]+@[\w.-]+\.[a-zA-Zа-яА-Я]{2,}$/,
                  required: "поле E-mail должно быть заполненно "
               })}
               onInput={() => setErrorModal(false)}
               placeholder="E-mail" />
            {errors?.email && (
               <Error message={errors.email.message as string || "укажите существующую почту"} close={() => setErrorModal(false)} />
            )}
            <input type="tel"
               className={styles.input + ' ' + (errors.phone ? styles.inputError : '')}
               {...register('phone', {
                  minLength: 9, pattern: {
                     // eslint-disable-next-line no-useless-escape
                     value: /^[\+\-—\(\)\d]{10,18}$/,
                     message: 'Телефон должен быть в формате +xxxxxxxxxxx',
                  },
                  required: "поле телефон должно быть заполненно"
               })}
               placeholder="Телефон"
               onInput={() => setErrorModal(false)}
            />
            {errors?.phone && (
               <Error message={errors.phone.message as string || "Телефон должен быть в формате +xxxxxxxxxxx"} close={() => setErrorModal(false)} />
            )}

            <textarea {...register('description', { required: true })}
               onInput={() => setErrorModal(false)}
               placeholder="Короткое описание проекта" />

            {errors?.description && (
               <Error message={errors.description.message as string || "дабавьте описание проекта"} close={() => setErrorModal(false)} />
            )}

            <div className={styles.divButton}>
               <button disabled={!isValid} className={styles.button + ' ' + (isLoading ? styles.loading : '')} type="submit">{isLoading ? <Loading /> : null} Отправить</button>
               <ReCAPTCHA
                  ref={captchaRef}
                  // ref={captchaRef as React.RefObject<ReCAPTCHA >}
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