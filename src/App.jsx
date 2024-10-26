import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change to use Routes
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import ContentWarnings from './pages/ContentWarnings';
import SupportUs from './pages/SupportUs';
import TheTeam from './pages/TheTeam';
import Nav from './components/Nav';
import StoneWood from './pages/StoneWood';
import theme from '../theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Nav />
      <Routes> {/* Use Routes instead of just Route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/stoneWood" element={<StoneWood />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/contentwarnings" element={<ContentWarnings />} />
        <Route path="/supportus" element={<SupportUs />} />
        <Route path="/theteam" element={<TheTeam />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
