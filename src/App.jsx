import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Technologies from './pages/Technologies';
import Government from './pages/Government';
import Company from './pages/Company';
import Leadership from './pages/Leadership';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Webinars from './pages/Webinars';
import ReportIncident from './pages/ReportIncident';
import NotFound from './pages/NotFound';

// Import Bootstrap JS for dropdowns/collapse
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="government" element={<Government />} />
          <Route path="company" element={<Company />} />
          <Route path="company/leadership" element={<Leadership />} />
          <Route path="company/careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/blog" element={<Blog />} />
          <Route path="resources/events" element={<Events />} />
          <Route path="resources/webinars" element={<Webinars />} />
          <Route path="report-incident" element={<ReportIncident />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
