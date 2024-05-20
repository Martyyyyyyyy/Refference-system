import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/desktops';

export const listDesktops = () => axios.get(REST_API_BASE_URL); 

export const createDesktop = (desktop) => axios.post(REST_API_BASE_URL, desktop); 

export const getDesktop = (desktopId) => axios.get(REST_API_BASE_URL + '/' + desktopId);

export const updateDesktop = (desktopId, desktop) => axios.put(REST_API_BASE_URL + '/' + desktopId, desktop);

export const deleteDesktop = (desktopId) => axios.delete(REST_API_BASE_URL + '/' + desktopId);
