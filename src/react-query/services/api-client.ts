import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient <T> {
  endpoint: string
  config ?: {params:{
    [key: string]: number
  }}

  constructor (endpoint: string, config?: {params:{
    [key: string]: number
  }}) {
    this.endpoint = endpoint
    this.config = config
  }

  getAll = () => 
    axiosInstance
      .get <T[]> (this.endpoint, this.config)
      .then((res) => res.data)
  

  postAll = (data: T) => 
    axiosInstance
      .post <T[]> (this.endpoint, data)
      .then((res) => res.data)
  
}


export default APIClient;
