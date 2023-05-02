import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
      key: '3d8d42eb241543cc8ee5a4f02d22383f',
    },
  });

  export interface FetchResponse<T> {
    count: number;
    next: any;
    previous: any;
    results: T[];
  }

  class APIClient<T> {
    endpoint: string;
  
    constructor(endpoint: string) {
      this.endpoint = endpoint;
    }
  
    getAll = () => {
      return axiosInstance.get<FetchResponse<T>>(this.endpoint).then(res => res.data);
    };
  
    // post = (data: T) => {
    //   return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
    // };
  }
  
  export default APIClient;