import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Protectmainpage from './components/protectmainpage';
import LoadingSpinner from './components/LoadingSpinner';
import AboutUs from './pages/Aboutus';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Explore = lazy(() => import('./pages/Explore'));
const Pricing = lazy(() => import('./pages/Pricing'));
const SignUp = lazy(() => import('./pages/SignUp'));
const DashboardC = lazy(() => import('./pages/DashboardC')); 
const PricingBasic = lazy(() => import('./pages/PricingBasic'));
const PricingEnterprice = lazy(() => import('./pages/PricingEnterprice'));
const PricingPro = lazy(() => import('./pages/PricingPro'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));

// AI Features pages
const AIFeatures = lazy(() => import('./pages/AIFeatures'));
const GamingCharacters = lazy(() => import('./pages/features/GamingCharacters'));
const Avatars = lazy(() => import('./pages/features/Avatars'));
const AIGeneratedImages = lazy(() => import('./pages/features/AIGeneratedImages'));
const BookCovers = lazy(() => import('./pages/features/BookCovers'));
const MoviePosters = lazy(() => import('./pages/features/MoviePosters'));

// Fake authentication function (replace this with your actual auth logic)
const isAuthenticated = () => {
  return localStorage.getItem('Admin'); // Example: Check if token exists
};

const DashboardProtectedRoute = () => {
  return isAuthenticated() ? <DashboardC /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Main Site Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="basic" element={<PricingBasic />} />
          <Route path="enterprice" element={<PricingEnterprice />} />
          <Route path="pro" element={<PricingPro />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="blog" element={<Blog />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="pricing" element={<Pricing />} />
          <Route element={<Protectmainpage />}>

            <Route path="ai-features" element={<AIFeatures />} />
            <Route path="ai-features/gaming-characters" element={<GamingCharacters />} />
            <Route path="ai-features/avatars" element={<Avatars />} />
            <Route path="ai-features/ai-generated-images" element={<AIGeneratedImages />} />
            <Route path="ai-features/book-covers" element={<BookCovers />} />
            <Route path="ai-features/movie-posters" element={<MoviePosters />} />
          </Route>
          </Route>

          {/* Auth Routes */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Dashboard Routes - Protected */}
        <Route path="/admin/*" element={<DashboardProtectedRoute />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
