import { useLocation, useParams, useSearchParams } from "react-router-dom"

function UsersDetail() {
    const params = useParams()
    console.log(params)
    const [url] = useSearchParams()
    console.log(url.toString())

    const loc = useLocation()
    console.log(loc)
  return (
    <div>Users {params.id}</div>
  )
}

export default UsersDetail