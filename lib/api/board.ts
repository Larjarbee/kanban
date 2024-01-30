import { useQuery } from 'react-query';
import axios from 'axios';

export const getBoards = () => {
  return useQuery('boards', () => {
    return axios.get('http://localhost:4000/boards');
  });
};

export const getBoardById = (id: string) => {
  return useQuery('board', () => {
    return axios.get(`http://localhost:4000/boards/${id}`);
  });
};
