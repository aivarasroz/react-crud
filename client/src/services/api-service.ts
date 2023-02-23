import axios from 'axios';
import { getTeamFormValues } from 'pages/team-form-page/helpers';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


type CreateTeamRequest = Omit<TeamModel, "id">;

const createTeam = async (getTeamFormValues: CreateTeamRequest) => {
  const response = await api.post<TeamModel>('/Teams', getTeamFormValues);

  return response.data;
};


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
  createTeam,

};

export default ApiService;