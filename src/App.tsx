import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import { NotFoundPage } from 'pages/error-page/notFoundPage';
import MainPage from 'pages/main-page/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* {news} */}
          {/* {articles} */}
          <Route path="/podcasts" element={<NotFoundPage />} />
          <Route path="/drugs" element={<NotFoundPage />} />
          <Route path="/doctor" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
