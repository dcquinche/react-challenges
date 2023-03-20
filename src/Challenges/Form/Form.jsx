import './styles.css';
import { useState, useEffect } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(userList);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    if(name === 'name') {
      setName(value);
    }
    if(name === 'email') {
      setEmail(value);
    }
    if(name === 'password') {
      setPassword(value);
    }
    if(name === 'search') {
      setSearch(value);
    }
  }

  const handleSubmit= (event) => {
    event.preventDefault()
    setUserList(userList.concat({name: name, email: email, password: password}))
    document.querySelector('#form').reset()
  }

  useEffect(() => {
    setFilter(search ? userList.filter((user) => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) : userList)
  }, [search])

  return(
    <div>
      <form id='form' className='form' onSubmit={handleSubmit}>
        <h1>Form Users</h1>
        <input type="text" name="name" placeholder='Name' onChange={handleChange} />
        <input type="email" name="email" placeholder='Email' onChange={handleChange} />
        <input type="password" name="password" placeholder='Password' onChange={handleChange} />
        <button type="submit">Save Info</button>
      </form>
      <section className='form__filter'>
        <p>Filter by Name: </p>
        <input type="text" name='search' onChange={handleChange} />
      </section>
      <section>
        <h2>List of Users</h2>
        {
          filter.map((user) => (
            <p key={user.email}>Name: {user.name} - Email: {user.email}</p>
          ))
        }
      </section>
    </div>

  )
}

export default Form;
