import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Image from './components/Image';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Image />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
