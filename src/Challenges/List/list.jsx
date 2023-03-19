const List = () => {
  const list = ['Javascript', 'CSS', 'HTLM', 'React']
  return (
    <div>
    <h1>Las tecnologias del Front</h1>
    <ul>
      {
        list.map((tech) => (
          <li key={tech}>{tech}</li>
        ))
      }
    </ul>
  </div>
  )
}

export default List;
