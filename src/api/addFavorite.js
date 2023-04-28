import axios from "axios";

export default async function addFavorite(id) {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}favourites`,
    { image_id: `${id}` },
    {
      headers: { 
        'content-type':"application/json",
        'x-api-key':  process.env.REACT_APP_API_KEY 
      },
    })
  return response.data;
}
