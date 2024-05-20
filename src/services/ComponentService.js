import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/components';

export const listComponents = () => axios.get(REST_API_BASE_URL); 

export const createComponent = (component) => axios.post(REST_API_BASE_URL, component); 

export const getComponent = (componentId) => axios.get(REST_API_BASE_URL + '/' + componentId);

export const updateComponent = (componentId, component) => axios.put(REST_API_BASE_URL + '/' + componentId, component);

export const deleteComponent = (componentId) => axios.delete(REST_API_BASE_URL + '/' + componentId);