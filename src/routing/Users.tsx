import { Link } from "react-router-dom"

const users = [
  {id: 1, title: 'Fahim'},
  {id: 2, title: 'Ahmed'},
  {id: 3, title: 'Mim'},
]
function Users() {
  return (
    <>
      <h1>Users</h1>
      <ul className="list-group">
        {users.map((item) => <li className="list-group-item" key={item.id}>
          <Link to={`/users/${item.id}`}>{item.title}</Link></li>)}
      </ul>
    </>
  )
}

export default Users