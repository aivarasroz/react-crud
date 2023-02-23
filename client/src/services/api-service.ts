import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


type CreateTeamRequest = Omit<TeamModel, "id">;

const createTeam = async (teamdata: CreateTeamRequest) => {
  const response = await api.post<TeamModel>('/Teams', teamdata);

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