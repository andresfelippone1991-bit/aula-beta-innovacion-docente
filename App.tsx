import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { db } from './src/firebase/config';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { IAPlanning } from './pages/IAPlanning';
import { ClassroomGames } from './pages/ClassroomGames';
import { TeacherLibrary } from './pages/TeacherLibrary';
import { Regulations } from './pages/Regulations';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { CoreFeatures } from './pages/CoreFeatures';
import { Login } from './src/pages/Login';
import { Register } from './src/pages/Register';
import { Footer } from './components/Footer';
import { AuthProvider } from './src/context/AuthContext';

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
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
