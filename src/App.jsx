import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteHeader from './components/SiteHeader/SiteHeader';
import RewardsPage from './pages/RewardsPage';
import FeaturePage from './pages/FeaturePage';
import NotFoundPage from './pages/NotFoundPage';
import { ROUTES } from './utils/routes';

/** Scroll to top (or to a #hash target) on route change. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path={ROUTES.home} element={<RewardsPage />} />
          <Route path={ROUTES.refer} element={<FeaturePage feature="refer" />} />
          <Route path={ROUTES.swap} element={<FeaturePage feature="swap" />} />
          <Route path={ROUTES.bonus} element={<FeaturePage feature="bonus" />} />
          <Route path={ROUTES.captcha} element={<FeaturePage feature="captcha" />} />
          <Route path={ROUTES.exchange} element={<FeaturePage feature="exchange" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
