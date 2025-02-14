import axios, { AxiosInstance } from 'axios';

class ApiClient {
  private instance: AxiosInstance;

  constructor(baseUrl: string) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
      headers: {
      'Content-Type': 'application/json',
      },
    });

    this.instance.interceptors.request.use(
      (response) => response,
      (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
      }
    );
  }
  public async get<T>(url: string, params?: Record<string, unknown>, headers?: Record<string, string>): Promise<T> {
    const response = await this.instance.get<T>(url, { params, headers });
    return response.data;
  }

  public async post<T, D = unknown>(url: string, data: D): Promise<T> {
    const response = await this.instance.post<T>(url, data);
    return response.data;
  }
}

export const apiClient = new ApiClient(
process.env.NEXT_PUBLIC_BASE_URL!
);
