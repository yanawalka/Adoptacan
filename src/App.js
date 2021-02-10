import React from "react";
import UserNavBar from './components/Navbar/User/UserNavBar';
import AdminNavBar from './components/Navbar/Admin/AdminNavBar';


function App() {
  return (
    <div>
      <AdminNavBar />
      <UserNavBar />
    </div>
  );
}

export default App;
