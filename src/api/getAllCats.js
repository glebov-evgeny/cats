import axios from "axios";

export default async function getAllCats(limit) {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}images/search?limit=${limit}`, {
    headers: { 
      'content-type':"application/json",
      'x-api-key':  process.env.REACT_APP_API_KEY 
    },
  })
  return response.data;
}
