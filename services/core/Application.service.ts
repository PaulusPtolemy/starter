import { AxiosInstance, AxiosRequestConfig } from 'axios'

export class ApplicationService {
    constructor (private httpClient: AxiosInstance) {}

    get (path: string, params = {}, requestConfig = {}) {
        return this.request({
            method: 'GET',
            url: path,
            params,
            ...requestConfig,
        })
    }

    post (path: string, data = {}, requestConfig = {}) {
        return this.request({
            method: 'POST',
            url: path,
            data,
            ...requestConfig,
        })
    }

    put (path: string, data = {}, requestConfig = {}) {
        return this.request({
            method: 'PUT',
            url: path,
            data,
            ...requestConfig,
        })
    }

    delete (path: string, params = {}, requestConfig = {}) {
        return this.request({
            method: 'DELETE',
            url: path,
            params,
            ...requestConfig,
        })
    }

    patch (path: string, data = {}, requestConfig = {}) {
        return this.request({
            method: 'PATCH',
            url: path,
            data,
            ...requestConfig,
        })
    }

    async request (options: AxiosRequestConfig) {
        const config = {
            ...options,
            responseType: options.responseType || 'json',
        }
        const response = await this.httpClient(config)
        return response?.data?.data || {}
    }
}
