import { useState, useEffect } from 'react';
import Login from './Components/Auth/Login';
import './App.css';
import EmployeeDashboard from './Components/Dashboards/EmployeeDashboard';
import AdminDashboard from './Components/Dashboards/AdminDashboard';
import { SetLocalStorage } from './Utils/LocalStorage';
import { AuthContext } from './Context/AuthProvider';
import { useContext } from 'react';

function App() {

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authdata = useContext(AuthContext);
//   useEffect(() => {
//   if (authdata) {
//     const loggedInUser = localStorage.getItem("loggedInUser")
//     if (loggedInUser) {
//       setUser(loggedInUser.role)
//     }
//   }
// }, [authdata]);


  const handleLogin = (email, password) => {

    if (email === "admin@company.com" && password === "1234") {
      setUser("Admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin" }));
    } else if (authdata) {
      const Employee = authdata.employees.find((employee) => employee.email === email && employee.password === password);
      setUser("Employee")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "Employee" }));
    } else {
      alert("Invalid Credentials");
    }

  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user === "Admin" ? <AdminDashboard /> : <EmployeeDashboard />}


    </>
  );
}
export default App; 