import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/componentsInComputer';

export const listComputers = () => axios.get(REST_API_BASE_URL); 

export const createComputer = (computer) => axios.post(REST_API_BASE_URL, computer); 

export const getComputer = (computerId) => axios.get(REST_API_BASE_URL + '/' + computerId);

export const updateComputer = (computerId, computer) => axios.put(REST_API_BASE_URL + '/' + computerId, computer);

export const deleteComputer = (computerId) => axios.delete(REST_API_BASE_URL + '/' + computerId);
