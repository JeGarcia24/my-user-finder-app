import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './components/Users';
import Pagination from './components/Pagination';
import './App.css'

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [usersPerPage] = useState(6);

useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      const client_id = 'Iv1.8eeafcd94e4648ca';
      const client_secret = '35fba642113445960f0b0617a8e0588f400620f7';
      const userNum = 100;
      const api_call = await axios.get(`https://api.github.com/users?client_id=${client_id}&client_secret=${client_secret}&page=1&per_page=${userNum}`)
      setUsers(api_call.data)
      setLoading(false)
     }

   fetchData()
  }, [])

  console.log(users)

  //get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  //change page in pagination
  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <div className='container'>
        <div className='app-container'>
          <h1>GitHub Users</h1>
          <Users users={currentUsers} loading={loading}/>
          <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
        </div>
        
    </div>
  );
}

export default App;