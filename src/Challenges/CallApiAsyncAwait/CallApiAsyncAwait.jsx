import { useState, useEffect } from "react";
import UserInfo from "../UserInfo/UserInfo";

const CallApiAsyncAwait = () => {
  const [user, setUser] = useState([]);
  const [dataStr, setDataStr] = useState('');
  const [page, setPage] = useState(0);
  console.log(page)

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api?page=${page}`);
        const data = await response.json();
        setUser(data.results)
        setDataStr(JSON.stringify(data))
      } catch (error) {
        console.error(error)
      }
    }
    getApi()
  }, [page])

  const hadleClickNext = () => {
    setPage(page + 1)
  }

  const hadleClickPrev = () => {
    setPage(page - 1)
  }

  return (
    <div>
      <h2>Raw Data: </h2>
      <p>{dataStr}</p>
      {
        user.map((user)=>(
          <UserInfo user={user} key={user.id.value} />
        ))
      }
      <section>
        <button type="submit" onClick={hadleClickPrev}>Prev Page</button>
        <p>{page}</p>
        <button type="submit" onClick={hadleClickNext}>Next Page</button>
      </section>
    </div>
  )
}

export default CallApiAsyncAwait;
