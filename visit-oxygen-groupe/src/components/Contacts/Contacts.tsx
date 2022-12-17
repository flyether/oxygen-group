import { Link } from 'react-router-dom';


const Contacts = () => {

  return (
    <div className="main">
      Свяжитесь с нами
      <Link to="/" >
        главная
      </Link>
    </div>
  );
};

export default Contacts;
