import React from "react";
import UserNavBar from './components/Navbar/User/UserNavBar';
import AdminNavBar from './components/Navbar/Admin/AdminNavBar';
import QueryPerro from './config/ApolloConfig';
import Showroom from './components/Page/InicioAdmin/Showroom';
import Tester from './components/Page/Tester';


function App() {
  return (
    <div>
      <Tester/>
      {/* {QueryPerro}
      <Showroom />
      <AdminNavBar />
      <UserNavBar /> */}
    </div>
  );
}

export default App;
