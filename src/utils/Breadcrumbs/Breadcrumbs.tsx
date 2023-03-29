import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Breadcrumbs() {
  const location = useLocation();
  const [isTitle, setTitle] = useState('');

  useEffect(() => {
    if (location.pathname === '/about') {
      setTitle('О нас');
    } else if (location.pathname === '/privacy_policy') {
      setTitle('Политика');
    }
  }, [location.pathname]);

  return (
    <div className="flex">
      <Link
        to="/"
        className={location.pathname === '/' ? 'breadcrumb-active' : 'breadcrumb-not-active'}
      >
        Главная <div className="arrow" />
      </Link>
      <div className={'breadcrumb-not-active'}>{isTitle}</div>
      {/* <Link to="/about/1"
className={location.pathname === "/about/1" ? "breadcrumb-active" : "breadcrumb-not-active"}
>
страница
</Link> */}
    </div>
  );
}

// export default Breadcrumbs;
