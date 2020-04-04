export interface Action<T> {
  type: T;
  payload?: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request?: Promise<any>;
}
