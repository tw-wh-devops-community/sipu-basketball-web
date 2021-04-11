import axios, {
  AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse,
} from 'axios';

export class HttpClient {
  instance: AxiosInstance;

  private readonly baseURL = '/';

  constructor(baseURL?: string) {
    this.instance = axios.create({
      baseURL: baseURL || this.baseURL,
      headers: { 'Content-Type': 'application/json' },
    });
    this.initializeInterceptor();
  }

  initializeInterceptor() {
    this.instance.interceptors.request.use(
      HttpClient.handleRequest,
      HttpClient.handleError,
    );

    this.instance.interceptors.response.use(
      HttpClient.handleResponse,
      HttpClient.handleError,
    );
  }

  private static handleRequest(config: AxiosRequestConfig) {
    config.headers.Authorization = 'Bearer xxx';
    return config;
  }

  private static handleResponse(res: AxiosResponse) {
    return res;
  }

  private static handleError(error: AxiosError) {
    return Promise.reject(error);
  }
}
