import axios, { AxiosInstance } from 'axios';

const createInstance = (): AxiosInstance => {
  const instance = axios.create({
    headers: { 'Content-Type': 'application/json' }
  });
  return instance;
};

export const http = createInstance();
