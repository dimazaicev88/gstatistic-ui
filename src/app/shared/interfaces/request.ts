export interface RequestInfo {
  Error: string
  Total?: number
}

export interface RequestResult<T> extends RequestInfo {
  Result: T | null
}
