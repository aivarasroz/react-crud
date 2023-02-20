import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json',
  },
});


const fetchNba = async () => {
  const response = await api.get<TeamModel>('./Nba');

  return
};

const ApiService = {
  fetchNba,

};

export default ApiService;