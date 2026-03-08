import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import PrivateRoute from './Components/Auth/PrivateRoute';
import { AuthContext } from './Context/AuthProvider';
import { useContext } from 'react';
import Loader from './Components/Others/Loader';

// Lazy loading components
const Login = lazy(() => import('./Components/Auth/Login'));
const EmployeeDashboard = lazy(() => import('./Components/Dashboards/EmployeeDashboard'));
const AdminDashboard = lazy(() => import('./Components/Dashboards/AdminDashboard'));

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authdata = useContext(AuthContext);
  const navigate = useNavigate();

  // On app boot: restore session from localStorage
  useEffect(() => {
    const raw = localStorage.getItem('loggedInUser');
    if (!raw) return;

    try {
      const userData = JSON.parse(raw);
      if (!userData?.role) return;

      if (userData.role === 'Employee' && userData.data) {
        const freshEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        const fresh = freshEmployees.find(e => e.email === userData.data.email);
        setLoggedInUser({ role: 'Employee', data: fresh || userData.data });
        navigate('/employee', { replace: true });
      } else if (userData.role === 'Admin') {
        setLoggedInUser({ role: 'Admin' });
        navigate('/admin', { replace: true });
      }
    } catch {
      localStorage.removeItem('loggedInUser');
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@company.com' && password === '1234') {
      const session = { role: 'Admin' };
      setLoggedInUser(session);
      localStorage.setItem('loggedInUser', JSON.stringify(session));
      navigate('/admin', { replace: true });

    } else {
      // Fetch fresh data from localStorage instead of relying on stale context authdata
      const freshEmployees = JSON.parse(localStorage.getItem('employees')) || [];
      const employee = freshEmployees.find(
        e => e.email === email && e.password === password
      );

      if (employee) {
        const session = { role: 'Employee', data: employee };
        setLoggedInUser(session);
        localStorage.setItem('loggedInUser', JSON.stringify(session));
        navigate('/employee', { replace: true });
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    navigate('/login', { replace: true });
  };

  const freshEmployees = JSON.parse(localStorage.getItem('employees')) || authdata?.employees || [];

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public — Login */}
        <Route path='/login' element={<Login handleLogin={handleLogin} />} />

        {/* Protected — Admin */}
        <Route
          path='/admin'
          element={
            <PrivateRoute allowedRole='Admin'>
              <AdminDashboard changeUser={handleLogout} employees={freshEmployees} />
            </PrivateRoute>
          }
        />

        {/* Protected — Employee */}
        <Route
          path='/employee'
          element={
            <PrivateRoute allowedRole='Employee'>
              <EmployeeDashboard changeUser={handleLogout} data={loggedInUser?.data} />
            </PrivateRoute>
          }
        />

        {/* Catch-all: redirect to /login */}
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;