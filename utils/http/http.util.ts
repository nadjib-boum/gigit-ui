import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import { IHTTPUtil } from './http.util.types';

class HTTPUtil implements IHTTPUtil {

  private instance: AxiosInstance;

  constructor () {

    this.instance = axios.create ({
      baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      withCredentials: true
    })

  }

  async get (endpoint: string, headers?: object) : Promise<any> {

    try {

      const res: AxiosResponse = await this.instance.get (endpoint, {
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      });

      return res.data;

    } catch (err: any) {

      return Promise.reject (err.response.data);

    }

  }

  async post (endpoint: string, data: object, headers?: object) : Promise<any> {

    try {

      const res = await this.instance.post (endpoint, data, {
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      });

      return res.data;

    } catch (err: any) {

      return Promise.reject (err.response.data);

    }

  }

  async patch (endpoint: string, data: object, headers?: object) : Promise<any> {

    try {

      const res = await this.instance.patch (endpoint, data, {
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      });

      return res.data;

    } catch (err: any) {

      return Promise.reject (err.response.data);

    }

  }

  async put (endpoint: string, data: object, headers?: object) : Promise<any> {

    try {

      const res = await this.instance.put (endpoint, data, {
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      });

      return res.data;

    } catch (err: any) {

      return Promise.reject (err.response.data);

    }

  }

  async delete (endpoint: string, headers?: object) : Promise<any> {

    try {

      const res: AxiosResponse = await this.instance.delete (endpoint, {
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      });

      return res.data;

    } catch (err: any) {

      return Promise.reject (err.response.data);

    }

  }

}

const httpUtil = new HTTPUtil (); 

export default httpUtil;