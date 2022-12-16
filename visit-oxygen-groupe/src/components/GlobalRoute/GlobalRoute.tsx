import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from '../../pages/WelcomePage';
import ErrorPage from '../../pages/ErrorPage';
import ContactsPage from '../../pages/ContactsPage';
import ErrorBoundary from '../../utils/ErrorBoundary';
import ParallaxPage from '../../pages/ParallaxPage';

const GlobalRoute = () => {
  return (
    <BrowserRouter   basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="parallax"
          element={
            <ErrorBoundary>
              <ParallaxPage />
            </ErrorBoundary>
          }
        />
          <Route
          path="main"
          element={
            <ErrorBoundary>
              <ParallaxPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="contacts"
          element={
            <ErrorBoundary>
              <ContactsPage />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default GlobalRoute;
