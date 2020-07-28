import React from 'react'

const Users = ({ users, loading }) => {
        if(loading){
            return 'Loading...'
        }
        return(
            <div className='all-info-container'>
                <div className='all-info'>
                    {users.map(user=> (
                    <div key={user.id}>
                        <div className='user-info'>
                        <span>User-login: {user.login}</span>
                        <ul>
                            <li>ID: {user.id}</li>
                            <li>URL: {user.html_url}</li>
                            <li>Repos_URL: {user.repos_url}</li>
                        </ul>
                        </div>
                    </div>
                ))} 
                </div>
            </div>
            
        )}

export default Users;
