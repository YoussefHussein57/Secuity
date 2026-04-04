import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ServiceCategoryPage from './pages/ServiceCategoryPage';
import serviceCategories from './data/serviceCategories';
import Technologies from './pages/Technologies';
import TechnologyDetail from './pages/TechnologyDetail';
import Government from './pages/Government';
import GovernmentDetail from './pages/GovernmentDetail';
import Company from './pages/Company';
import Leadership from './pages/Leadership';
import Careers from './pages/Careers';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Webinars from './pages/Webinars';
import Customers from './pages/Customers';
import VendorPartners from './pages/VendorPartners';
import ReportIncident from './pages/ReportIncident';
import Grit from './pages/Grit';
import Gpsu from './pages/Gpsu';
import GpsFinancial from './pages/GpsFinancial';
import Gpsec from './pages/Gpsec';
import CustomerSuccessDetail from './pages/CustomerSuccessDetail';
import BlogDetail from './pages/BlogDetail';
import ResourceDetail from './pages/ResourceDetail';
import BrickHouse from './pages/BrickHouse';
import NotFound from './pages/NotFound';

// Import Bootstrap JS for dropdowns/collapse
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ServiceRouter() {
  const { slug } = useParams();
  const cat = serviceCategories[slug];
  return cat ? <ServiceCategoryPage data={cat} /> : <ServiceDetail />;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceRouter />} />
          <Route path="services/:category/:slug" element={<ServiceDetail />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="technologies/:slug" element={<TechnologyDetail />} />
          <Route path="government" element={<Government />} />
          <Route path="government/:slug" element={<GovernmentDetail />} />
          <Route path="company" element={<Company />} />
          <Route path="company/leadership" element={<Leadership />} />
          <Route path="company/why-us" element={<WhyUs />} />
          <Route path="company/careers" element={<Careers />} />
          <Route path="company/customers" element={<Customers />} />
          <Route path="company/vendor-partners" element={<VendorPartners />} />
          <Route path="company/grit" element={<Grit />} />
          <Route path="company/gpsu" element={<Gpsu />} />
          <Route path="company/gps-financial" element={<GpsFinancial />} />
          <Route path="company/gpsec" element={<Gpsec />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/on-demand-webinars" element={<Navigate to="/resources?type=On-Demand+Webinar" replace />} />
          <Route path="resources/webinars" element={<Navigate to="/resources?type=On-Demand+Webinar" replace />} />
          <Route path="resources/videos" element={<Navigate to="/resources?type=Video" replace />} />
          <Route path="resources/customer-success" element={<Navigate to="/resources?type=Customer+Success" replace />} />
          <Route path="resources/datasheets" element={<Navigate to="/resources?type=Datasheet" replace />} />
          <Route path="resources/ebooks" element={<Navigate to="/resources?type=eBook" replace />} />
          <Route path="resources/infographics" element={<Navigate to="/resources?type=Infographic" replace />} />
          <Route path="resources/reports" element={<Navigate to="/resources?type=Report" replace />} />
          <Route path="resources/whitepapers" element={<Navigate to="/resources?type=Whitepaper" replace />} />
          <Route path="resources/blog" element={<Navigate to="/resources?type=Blog" replace />} />
          <Route path="resources/events" element={<Navigate to="/resources?type=Event" replace />} />
          <Route path="resources/:slug" element={<ResourceDetail />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="customer-success/:slug" element={<CustomerSuccessDetail />} />
          <Route path="report-incident" element={<ReportIncident />} />
          <Route path="thebrickhouse" element={<BrickHouse />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
