import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import RetroDesktopLayout from './components/RetroDesktopLayout';
import { Contact, Experience, Home, Intro, ProjectDetail, Projects } from './pages';
import './pages/styles.css';

const App = () => {
  return (
    <Router>
      <main className="app-shell app-shell--retro">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<RetroDesktopLayout />}>
            <Route path="/intro" element={<Intro />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects/swe" element={<Projects group="swe" />} />
            <Route path="/projects/ai" element={<Projects group="ai" />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/projects" element={<Navigate replace to="/projects/swe" />} />
          <Route path="/equify" element={<Navigate replace to="/projects/equify" />} />
          <Route path="/dressSense" element={<Navigate replace to="/projects/dresssense-ai" />} />
          <Route path="/sallyrise" element={<Navigate replace to="/projects/sallyrise" />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
