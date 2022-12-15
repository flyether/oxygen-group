import { Link } from 'react-router-dom';


const ContactsPage = () => {

  return (
    <div className="main">
      Свяжитесь с нами
      <Link to="/" >
        главная
      </Link>
    </div>
  );
};

export default ContactsPage;
