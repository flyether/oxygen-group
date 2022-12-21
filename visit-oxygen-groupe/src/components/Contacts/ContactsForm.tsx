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
      reset,
      formState: { errors, isValid },
   } = useForm({
      mode: "onBlur"
   });

   const [regUser, { error, isLoading, data:serverReq }] = commonApi.useRegUserMutation();
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
      alert(JSON.stringify(userData))
      // await regUser(userData).unwrap();
      reset();
   }
   return (
      <div>
         {isModalActive && (
            <ErrorModal onClose={() => setModalActive(false)}>
               <h3>{isErrorMessage}</h3>
            </ErrorModal>
         )}
         <form onSubmit={handleSubmit(submitForm)} className={styles.formContainer}>
            <input 
            type="text" 
            className={styles.input+' '+(errors.name?styles.inputError:'')}
            {...register('name', {
               minLength: 2,
               required: true
            })} placeholder="Имя" />

            <input type="email" 
             className={styles.input+' '+(errors.email?styles.inputError:'')}
            {...register('email', {
               minLength: 4,
               pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
               required: true
            })} placeholder="E-mail" />

            <input type="tel" 
            className={styles.input+' '+(errors.phone?styles.inputError:'')}
            {...register('phone', {
               minLength: 9,
               // pattern:  /\+\d{9,11}/,
               pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
               required: true
            })} placeholder="Телефон" />
            <textarea {...register('description')} placeholder="Короткое описание проекта" />


            <div className={styles.divButton}>
            <button disabled={!isValid} className={styles.button+' '+(isLoading?styles.loading:'')} type="submit">{isLoading ? <Loading /> : null} Отправить</button>

               <div>Нажимая кнопку
                  вы соглашаетесь на обработку
                  персональных данных</div>
            </div>
         </form>
      </div>
   );
};
export default ContactsForm;