import APIClient from "./apiClient";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
  
  export interface FetchGenresResponse {
    const: number;
    results: Genre[];
  }

  export default new APIClient<FetchGenresResponse>('/genres');