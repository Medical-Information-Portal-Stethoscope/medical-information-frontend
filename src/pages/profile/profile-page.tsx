import Footer from 'components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/header';
import UserProfile from 'components/user-profile/user-profile';
import Sidebar from 'components/sidebar/sidebar';
import styles from './profile-page.module.scss';

function ProfilePage() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Sidebar />
        <Routes>
          <Route index element={<UserProfile />} />
          <Route path="favorites" element={123} />
          <Route path="publication" element={456} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;
