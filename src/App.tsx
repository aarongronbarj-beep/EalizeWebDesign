import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Stub from '@/pages/Stub';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/business-intelligence"
            element={<Stub title="Business Intelligence" />}
          />
          <Route
            path="/products/ad-creation"
            element={<Stub title="Ad Creation" />}
          />
          <Route
            path="/products/investing"
            element={<Stub title="Investing App" />}
          />
          <Route
            path="/products/development"
            element={<Stub title="App & Web Development" />}
          />
          <Route path="/about" element={<Stub title="About Ealize" />} />
          <Route path="/contact" element={<Stub title="Get in touch" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
