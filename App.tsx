import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { db } from './src/firebase/config';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthProvider } from './src/context/AuthContext';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const IAPlanning = lazy(() => import('./pages/IAPlanning').then(module => ({ default: module.IAPlanning })));
const ClassroomGames = lazy(() => import('./pages/ClassroomGames').then(module => ({ default: module.ClassroomGames })));
const TeacherLibrary = lazy(() => import('./pages/TeacherLibrary').then(module => ({ default: module.TeacherLibrary })));
const Regulations = lazy(() => import('./pages/Regulations').then(module => ({ default: module.Regulations })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));
const CoreFeatures = lazy(() => import('./pages/CoreFeatures').then(module => ({ default: module.CoreFeatures })));
const Login = lazy(() => import('./src/pages/Login').then(module => ({ default: module.Login })));
const Register = lazy(() => import('./src/pages/Register').then(module => ({ default: module.Register })));

// Loading Component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <ScrollToTop />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ia-planificacion" element={<IAPlanning />} />
                <Route path="/juegos-aula" element={<ClassroomGames />} />
                <Route path="/biblioteca-docente" element={<TeacherLibrary />} />
                <Route path="/biblioteca-docente/normativa" element={<Regulations />} />
                <Route path="/privacidad" element={<Privacy />} />
                <Route path="/terminos" element={<Terms />} />
                <Route path="/funcionalidades-core" element={<CoreFeatures />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
