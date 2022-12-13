import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {

  const [closeForm, setcloseForm] = useState(true)

  const {
    users, 
    getAllUsers, 
    createNewUser, 
    deleteUserById, 
    updateUserById
  } = useCrud()  

  const [updateInfo, setUpdateInfo] = useState()

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <h1>Users</h1>
      <button onClick={() => setcloseForm(false) } className="App__btn">Open Form</button>
      <div className={`form-container ${closeForm && 'close__form'}`}>
      <FormUsers 
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setcloseForm={setcloseForm}
      />
      </div>
      <div className='user-container'>
      {
        users?.map(user => (
          <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
          />
        ))
      }
    </div>
    </div>
  )
}

export default App
