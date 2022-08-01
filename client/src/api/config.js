import {create} from 'axios'

export const BASE_URL = "http://localhost:8000";

const API = create({
  baseURL: BASE_URL
});

export const API_URLS = {
  players: '/players',
};

export default API;
