import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuthStore } from './store/auth.ts';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';

const App = () => {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />

        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path={'/profile'} element={<ProfilePage />} />
          {/* <Route path="/dashboard" element={<ProfilePage />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
