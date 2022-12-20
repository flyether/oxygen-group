import { FC, useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { IUser } from '../../models/interfaces';
import { commonApi } from '../../store';

import ErrorModal from '../atoms/errorModal';
import Loading from '../atoms/loading';
import styles from './Contacts.module.css'

const ContactsForm: FC = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const [regUser, { error, isLoading }] = commonApi.useRegUserMutation();
   const [isModalActive, setModalActive] = useState(false);
   const [isErrorMessage, setErrorMessage] = useState('');

   useEffect(() => {
      if (error && 'data' in error) {
         setErrorMessage(error.data.message);
         setModalActive(true);
      } else {
         setModalActive(false);
      }
   }, [error]);

   const submitForm = async (data: FieldValues) => {
      const a = "Ваша заявка принята? в ближайшее время с вами свяжутся";
      setErrorMessage(a);
      setModalActive(true);

      const userData: IUser = {
         username: data.name,
         email: data.email,
         phone: data.phone,
         description: data.description
      };
      await regUser(userData).unwrap();
   }
   return (
      <div>
         {isModalActive && (
            <ErrorModal onClose={() => setModalActive(false)}>
               <h3>{isErrorMessage}</h3>
            </ErrorModal>
         )}
         <form onSubmit={handleSubmit(submitForm)} className={styles.formContainer}>
            <input {...register('name', {
               minLength: 1,
               required: true
            })} placeholder="Имя" />

            <input type="email" {...register('email', {
               minLength: 3,
               required: true
            })} placeholder="E-mail" />

            <input type="tel" {...register('phone', {
               minLength: 9,
               required: true
            })} placeholder="Телефон" />
            <textarea {...register('description')} placeholder="Короткое описание проекта" />


            <div className={styles.divButton}>
               <button className={styles.button} type="submit">{isLoading ? <Loading /> : <p>Отправить</p>}</button>
               <div>Нажимая кнопку
                  вы соглашаетесь на обработку
                  персональных данных</div>
            </div>
         </form>
      </div>
   );
};
export default ContactsForm;