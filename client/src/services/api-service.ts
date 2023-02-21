import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


const fetchTeams = async () => {
  const response = await api.get<TeamModel[]>('/Teams');

  return response.data
};

const fetchTeam = async (id: string | number) => {
  const response = await api.get<TeamModel>(`/Teams/${id}`);

  return response.data;
};

const ApiService = {
  fetchTeams,
  fetchTeam,

};

export default ApiService;