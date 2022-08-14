import React ,{useState, useEffect} from 'react'
import {db} from './firebase-config' 
import {collection, getDocs, addDoc, updateDoc, doc} from 'firebase/firestore'

export default function App() {
 

  const [newName, setnNewname] = useState('')
  const [newAge, setnNewage] = useState('')
  const [users, setUsers] = useState([])
  const usersRef = collection(db ,'users')
const createUser= async ()=>{
  await addDoc(usersRef, {name: newName, age: newAge})
}
const updateUser = async (id, age)=>{
  const userDoc = doc(db, 'users', id)
  const newFields = {age: age+1}
  updateDoc( userDoc, newFields)
}
  useEffect(()=>{
    const getUsers = async ()=>{
      const data = await getDocs(usersRef)
      console.log('fata', data);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }

    getUsers()
  },[])
  return (
    <div>
      <input type='number' placeholder='age' onChange={(e)=>setnNewname(e.target.value)}></input>
      <input type='text' placeholder='name' onChange={(e)=>setnNewage(e.target.value)}></input>
      <button onClick={createUser}>create user</button>
      {users.map((user)=>{
      return( 
      <div><h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>ID: {user.id}</h1>
      <button onClick={()=>{updateUser(user.id, user.age)}}>increase age</button>
      </div>
      )
    })}</div>
  )
}
