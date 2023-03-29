import { Routes, Route } from 'react-router-dom';

// import WelcomePage from '../Pages/WelcomePage';
import MainPage from '../Pages/MainPage/MainPage';
import ErrorPage from '../Pages/ErrorPage';
import ContactsPage from '../Contacts';
import ErrorBoundary from '../../utils/ErrorBoundary';
import AboutUs from '../Pages/AboutUS/AboutUs';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';

function GlobalRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary>
            <MainPage />
          </ErrorBoundary>
        }
      />
      <Route
        path="portfolio"
        element={
          <ErrorBoundary>
            <MainPage />
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
      <Route
        path="about"
        element={
          <ErrorBoundary>
            <AboutUs />
          </ErrorBoundary>
        }
      />
      <Route
        path="privacy_policy"
        element={
          <ErrorBoundary>
            <PrivacyPolicy />
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default GlobalRoute;
