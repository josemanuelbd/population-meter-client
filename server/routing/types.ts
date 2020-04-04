export interface ExpressApp extends Application {
  [key: string]: any;
}

export interface Route {
  method: string;
  url: string;
  handler: Function;
}

export type Routes = Route[];
