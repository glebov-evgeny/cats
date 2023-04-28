import axios from "axios";

export default async function removeFavorite(id) {
  const response = await axios.delete(`${process.env.REACT_APP_API_URL}favourites/${id}`, {
    headers: { 
      'content-type':"application/json",
      'x-api-key':  process.env.REACT_APP_API_KEY 
    },
  })
  return response.data;
}
