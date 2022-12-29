import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../../pages/WelcomePage';
import ErrorPage from '../../pages/ErrorPage';
import ContactsPage from '../Contacts';
import ErrorBoundary from '../../utils/ErrorBoundary';
import ParallaxPage from '../Parallax';

const GlobalRoute = () => {
  return (

      <Routes>
        <Route path="/"
          element={
            <ErrorBoundary>
              <WelcomePage />
            </ErrorBoundary>
          }
        />
        <Route
          path="portfolio"
          element={
            <ErrorBoundary>
              <ParallaxPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="news"
          element={
            <ErrorBoundary>
              <ContactsPage />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    
  );
};
export default GlobalRoute;
