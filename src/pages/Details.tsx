import { useParams } from "react-router-dom";

export const Details = () => {
  const {id} = useParams()

  return (
    <h1>{id}</h1>
  )
}