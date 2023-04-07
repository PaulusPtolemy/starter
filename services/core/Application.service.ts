import { $Fetch, FetchOptions } from "ofetch";

export class ApplicationService {
  constructor(private httpClient: $Fetch) {}

  get(path: string, params = {}, requestConfig = {}) {
    return this.request(path, {
      method: "GET",
      params,
      ...requestConfig,
    });
  }

  post(path: string, data = {}, requestConfig = {}) {
    return this.request(path, {
      method: "POST",
      body: data,
      ...requestConfig,
    });
  }

  put(path: string, data = {}, requestConfig = {}) {
    return this.request(path, {
      method: "PUT",
      body: data,
      ...requestConfig,
    });
  }

  delete(path: string, params = {}, requestConfig = {}) {
    return this.request(path, {
      method: "DELETE",
      params,
      ...requestConfig,
    });
  }

  patch(path: string, data = {}, requestConfig = {}) {
    return this.request(path, {
      method: "PATCH",
      body: data,
      ...requestConfig,
    });
  }

  async request(url: string, options: FetchOptions) {
    const config = {
      ...options,
      responseType: options.responseType || "json",
    };
    const response = await this.httpClient(url, config);
    return response?.data || {};
  }
}
