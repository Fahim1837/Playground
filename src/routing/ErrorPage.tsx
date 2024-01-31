import { isRouteErrorResponse, useRouteError } from "react-router-dom"

function ErrorPage() {
  const  error = useRouteError()
  const isError= isRouteErrorResponse(error)
  return (
    <>
        <h1>OOPS!!!</h1>
        <p>{isError ? 'Invalid' : 'Something Failed'}</p>
    </>
  )
}

export default ErrorPage