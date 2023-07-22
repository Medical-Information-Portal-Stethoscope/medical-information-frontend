import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
