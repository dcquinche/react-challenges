import { useState, useEffect } from "react";

const CallApiAsyncAwait = () => {
  const [user, setUser] = useState([]);

  const getApi = async () => {
    try {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      setUser(data.results)
    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <div>
      {
        user.map((user)=>(
          <p key={user.id.value}>Gender: {user.gender}</p>
        ))
      }
    </div>
  )
}

export default CallApiAsyncAwait;
