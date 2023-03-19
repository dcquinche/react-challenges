import { useEffect, useState } from "react";

const CallApiPromise = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => setUser(data.results))
    .catch((error) => console.log(error))
  }, []);

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

export default CallApiPromise;
