export interface UserFromServer {
  id: unknown;
  name: unknown;
}

export interface LoggedUser {
  readonly id: number;
  readonly name: string;
}

export interface LoginState extends LoggedUser {
  readonly isFetching: boolean;
}
