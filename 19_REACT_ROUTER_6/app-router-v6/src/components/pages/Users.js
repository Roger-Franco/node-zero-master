import { useNavigate } from 'react-router-dom'

function Users() {
  const Navigate = useNavigate()

  function handleClick() {
    Navigate('/')
  }

  return (
    <section>
      <p>
        Voltar para a <button onClick={handleClick}>Home</button>
      </p>
      <h1>Users</h1>
    </section>
  )
}

export default Users
