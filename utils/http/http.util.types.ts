export interface IHTTPUtil {
  get: (endpoint: string, headers?: object) => Promise<any>;
  post: (endpoint: string, data: object, headers?: object) => Promise<any>;
  patch: (endpoint: string, data: object, headers?: object) => Promise<any>;
  put: (endpoint: string, data: object, headers?: object) => Promise<any>;
  delete: (endpoint: string, headers?: object) => Promise<any>;
}