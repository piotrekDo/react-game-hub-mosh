import { AxiosInstance } from 'axios';

interface Entity {
  id: number;
}

class HttpService<T> {
  apiClient: AxiosInstance;
  endpoint: string;

  constructor( apiClient: AxiosInstance, endpoint: string) {
    this.apiClient = apiClient;
    this.endpoint = endpoint;
  }

  getAll() {
    const controller = new AbortController();
    const request = this.apiClient.get<T>(this.endpoint, { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
  }
}

function create<T>(apiClient: AxiosInstance, endpoint: string) {
    return new HttpService<T>(apiClient, endpoint);
}

export default create