import { ENV } from './env.common';

const { EXPRESS_PORT, SOCKET_PORT } = ENV;

export const BASE_URL = 'http://localhost';
export const SERVER_URL = `${ BASE_URL }:${ EXPRESS_PORT }`;
export const SOCKET_URL = `${ BASE_URL }:${ SOCKET_PORT }`;

export const API_URL = `${ SERVER_URL }/api`;
