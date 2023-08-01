import Footer from 'components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/header';
import Sidebar from 'components/sidebar/sidebar';
import styles from './profile-page.module.scss';

function ProfilePage() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Sidebar />
        <Routes>
          <Route index element={123456} />
          <Route path="favorites" element={123} />
          <Route path="publication" element={456} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;
