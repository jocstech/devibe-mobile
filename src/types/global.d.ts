export { };

declare global {
  interface Fn<T = any> {
    (...arg: T[]): T
  }

  type Nullable<T> = T | null

  interface IResponse<T = any> {
    code: number
    message: string
    data: T extends any ? T : T & any
    type: string
    meta?: {
      pageSize: number
      total?: number
      current?: number
    }
  }
}

