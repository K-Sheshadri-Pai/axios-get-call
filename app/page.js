'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setUserData(response.data)
    })
  },[])

  return (
    <div>
      <ol>
        {userData.map((data) => (
          <li>{data.name}</li>
        ))}
      </ol>
    </div>
  )
}

export default page