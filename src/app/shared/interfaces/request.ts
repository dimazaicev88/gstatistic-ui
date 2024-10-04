export interface RequestInfo {
  Error: string
}

export interface RequestResult<T> extends RequestInfo {
  Result: T | null
  Total?: number
}
