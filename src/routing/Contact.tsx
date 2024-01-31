import { FormEvent } from "react"
import { useNavigate } from "react-router-dom"

function Contact() {
  const navigate = useNavigate()
  function onHandleClick (e: FormEvent) {
    e.preventDefault()
    navigate('/')
  }
  return (
    <form onSubmit={onHandleClick}>
      <h1>Contact</h1>
      <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Contact