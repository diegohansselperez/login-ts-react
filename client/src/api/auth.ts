import axios from 'axios';

export const loginRequest = async (email: string, password: string) => {
  return axios.post('http://localhost:3001/login', {
    email,
    password,
  });
};

export const profileRequest = async () => {
  return await axios.get('http://localhost:3001/profile');
};
