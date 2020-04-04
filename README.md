![React-Base logo](./src/app/assets/images/logo.png)

# React-Base

**A modular platform for Redux applications**

This repository is a modular abstraction to build a [ReactJS](https://facebook.github.io/react/) web application based on [Redux](http://redux.js.org/) paradigm.
You can use it to quickly scaffold your React web application projects and development environments for these projects.

This seed should clarify how to wire up all the modules of your application, even when we understand that in some cases
there must be some changes needed by the structure to fit your needs correctly

- [Overview](#overview)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
  - [Wiring up your development environment](#wiring-up-your-development-environment)
  - [Initializing development server](#initializing-development-server)
- [Architecture](#architecture)
  - [Action Types](#action-types)
  - [Actions](#actions)
  - [Models](#models)
  - [Reducers](#reducers)
  - [Selectors](#selectors)
- [Distribution](#distribution)
  - [Building your production application](#building-your-production-application)
  - [Running production server](#running-production-server)
- [Testing](#testing)
  - [Running your tests](#running-your-tests)
  - [Generating code coverage](#generating-code-coverage)
- [License](#license)
- [Docs](/docs)
  - [CSS tooling](/docs/css-tooling.md)

## Overview

**React-Base** makes use of the latest tools to improve your workflow, and enables you to create future ready applications:

- [React](https://reactjs.org/) based UI
- [Redux](http://redux.js.org/) based architecture
- [Immer](https://github.com/immerjs/immer) is used to ensure redux state immutability
- [Styled Components](https://www.styled-components.com/) based styles
- Isomorphic / Universal Javascript Apps
- [Parcel](https://github.com/parcel-bundler/) builder
- Store middleware to handle request actions.
- Development & Production server using [express](https://github.com/expressjs/express) and [webpack-dev-server](https://webpack.github.io/)
- Hot Reload/Live Reload support for Js & Css using [Webpack HMR](https://webpack.github.io/docs/hot-module-replacement.html)
- JSX and ES6 transpilation using [Babel](https://babeljs.io/)
- [Eslint](https://github.com/eslint/eslint) as linting utils
- [TypeScript](https://www.typescriptlang.org/) as static types superset
- [Jest](https://jestjs.io/) as testing and coverage framework
- [Enzyme](https://github.com/airbnb/enzyme) as testing utils for React
- [Airbnb](https://github.com/airbnb/javascript/tree/master/react) React Style Guide

## Getting Started

To get you started, you need to meet the prerequisites, and then follow the installation instructions.

### Prerequisites

React-Base makes use a number of NodeJS tools to initialize and test React-Base. You must have node.js 6.2.0 at least, and its package manager (npm) installed. You can get it from [NodeJS](https://nodejs.org).

You also may want to work with [Yarn](https://yarnpkg.com/), wich is a compatible package manager.

### Installing

You can clone our Git repository:

`$ git clone https://gitlab.com/cddbspain_js_domain/react-base.git`

This method requires Git to be installed on your computer. You can get it from
[here](http://git-scm.com).

### Wiring up your development environment

Setting up **React-Base** is as easy as running one of these two commands:

`$ npm install`
`$ yarn`

This command will install all the required dependencies and start your development server, which takes care of all the changes you make to your code and runs all the awesome stuff that ends with your code automagically transpiled and running on your browser.

Please note that `npm install` or `yarn` is only required on your first start, or in case of updated dependencies.

### Initializing development server

Once all the dependencies are installed, you can run `$ npm run start` or `yarn start` to initialize your development server using [parcel](https://github.com/parcel-bundler/parcel) express middleware.

The dev server uses [HMR](https://webpack.github.io/docs/hot-module-replacement.html) (Hot module replacement) that injects updated modules into the bundle in runtime. It's like LiveReload

## Architecture

React-base is based on [Redux](http://redux.js.org/) paradigm so you can find all the typical entities of an Redux project like [reducers](http://redux.js.org/docs/basics/Reducers.html) , [store](http://redux.js.org/docs/basics/Store.html), [actions](http://redux.js.org/docs/basics/Actions.html) , etc.

There are four main folders:

- `server` contains React-Base development & production server based in express with Universal/Isomorphic support and custom middlewares like Gzip.

```javascript
server;
mocks / //Api mocks
routing / //routing files
statics / //definition of  statics path
  server; //Server
```

- `src/base/` contains React-Base platform bootstrapping code.

```javascript
base
  conf/ // Configuration files
  reducers/  // reducer index
  shared/ // shared base folder
    createReducer // Custom reducer creator
    env // Env setup
    envConfig // Env handler
    fileSystem // Filesystem manager
    http // Custom HTTP interface
  store/ // Store configuration and RootState definition
  types/ // Action, root state and root reducer types definitions
  ...
```

- `src/app/` is the place where to put your application source code.

React-Base uses a "featured based" distribution, so all the necessary code for each page/features is located in its own folder inside containers folder as in `src/app/containers/myContainer`

A container is a React component who contains other components, Redux entities, functions and store subscriptions. Each container is self-contained and represents a feature like "clients" or "products" and it contains all the necessary stuff.

```javascript
app/
  containers/
    myContainer/
      actionTypes/ // action types definition
      actions/ // action creators
      api/ // api calls
      components/ // smaller components used in the functional component
      hooks/ // custom hooks used in the functional component
      models/ // models using immutable
      reducers/ // reducer node for this container
      selectors/ // selectors to access particular data in our reducers
      styles/ // styles for the functional component
      types/ // type definitions used on this container
      index.spec.tsx // Test cases for the functional component
      index.tsx // functional component
  ...
```

### Action Types

ActionTypes it's a representation using constants of your possible actions:

```javascript
export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  CLICK = 'CLICK',
}
```

### Actions

Actions are payloads of information witch represent that something happend in your application and send data from your application to your store:

```javascript
export const click = () => ({
  type: ActionTypes.CLICK
});
```

React-Base include a Redux Store middleware to handle actions with service calls more easyly. You can define in the api folder of your container, an api call based in a fetch call:

```javascript

  fetchUsers() {
    return fetch(url)
      .then(req => req.json())
      .then(data => data)
      .catch(err => err)
  },

```

Then, in your action you can attach this service call in your action using the request param:

```javascript
import * as api from "../api";

export const loginRequest = () => ({
  type: ActionTypes.LOGIN_REQUEST,
  request: api.loginRequest()
});
```

The request middleware will resolve the request param
and dispatch a new action with "ACTION_SUCCESS" or "ACTION_ERROR" with the response of the request in the payload.

### Models

Stores some of the elements you're going to use in the application, such as the initial state of the container reducer.

Here there are also `modelCreators`, which are functions to parse results from any API on the internet, and make sure the result of those requests are a valid model for your application, that respects your typing requirements.

```javascript
import { LoginState, UserFromServer, LoggedUser } from "../types";

// Model for the initialState of your reducer
export const initialState: LoginState = {
  id: -1,
  name: "Default Text",
  isFetching: false
};

// Model creator will ensure the data provided by the server is valid.
// If data is not valid, you can throw an error and discard that data, to prevent
// crashing the application
export const createUserFromServer = ({
  id,
  name
}: UserFromServer): LoggedUser | undefined => {
  if (typeof id === "undefined" || typeof name === "undefined") {
    console.error(
      "Error creating user model, some of mandatory properties is missing",
      { id, name }
    );

    return undefined;
  }

  return {
    id: Number(id),
    name: String(name)
  };
};
```

### Reducers

Reducers describe how the state of your application changes in response to a new Action. React-Base uses a custom CreateReducer that allows to use separated reducers functions instead of "switch based" reducers.

These functions will `produce` a new state using [Immer](https://github.com/immerjs/immer), so we avoid to maintain unchanged pieces of the state.

```javascript
import { createReducer } from "base";
import produce from "immer";
import { initialState } from "../models";
import { ContainerState } from "../types";

const click = (state: ContainerState, action) =>
  produce(state, draft => {
    draft.mainData = action.payload;
  });

const success = (state: ContainerState, action) =>
  produce(state, draft => {
    draft.user = action.payload.user;
  });

const actionHandlers = {
  [ActionTypes.CLICK]: click,
  [ActionTypes.MAIN_SUCCESS]: success
};

export default createReducer(initialState, actionHandlers);
```

This `produce` will be setup on each funcion, as per [Immer developer's recommendation](https://github.com/immerjs/immer#reducer-example):

_Note: it might be tempting after using producers for a while, to just place `produce` in your root reducer and then pass the draft to each reducer and work directly over such draft. Don't do that. It kills the point of Redux where each reducer is testable as pure reducer. Immer is best used when applying it to small individual pieces of logic._

### Selectors

Selectors are abstracted functions to access to a particular point of your container store.

We use to access to the same data from different access points, and we also use to need data A to check/generate data B. In these scenarios, abstract selectors in simple and atomic functions will help us to minimize errors when changing reducer's shape

```javascript
import { RootState } from "base/types";

export const getLoginData = ({ login: { isFetching, ...data } }: RootState) =>
  data;

export const isFetchingLogin = ({ login }: RootState) => login.isFetching;
```

## Distribution

You can generate a complete distribution source ready for production enviroments.

### Building your production application

`$ npm run build:prod` or `$ yarn build:prod` will create a minified version for your application, ready for production.

### Running production server

`$ npm run start:prod` or `$ yarn start:prod` will run production enviroment of your application serving content from dist directory.

## Testing

React base uses [Enzyme](https://github.com/airbnb/enzyme) a testing utillity created by [Airbnb](https://github.com/airbnb/) for unit testing and Ui testing using [JsDom](https://github.com/tmpvar/jsdom) so you can run your ui testing without a browser.

### Running your tests

`$ npm run test` or `yarn test` will perform your unit testing, or npm test:coverage to run your tests and display a code coverage report.

### Generating code coverage

React base uses [Jest](https://jestjs.io/) for code coverage and you can generate reports in console or icov/html format.

`$ npm run test:coverage` or `yarn test:coverage` will perform your code coverage, generating an html report located in coverage/ folder.

## License

**React-Base** is available under the [MIT license](LICENSE).
