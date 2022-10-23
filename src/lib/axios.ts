import defaultAxios from 'axios';

const baseURL = '';

export const axios = defaultAxios.create({ baseURL });
