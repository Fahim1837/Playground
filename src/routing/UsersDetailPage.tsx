import { useLocation, useParams, useSearchParams } from "react-router-dom"

function UsersDetailPage() {
    const params = useParams()
    console.log(params)
    const [url] = useSearchParams()
    console.log(url.toString())

    const loc = useLocation()
    console.log(loc)
  return (
    <div>Users detail</div>
  )
}

export default UsersDetailPage