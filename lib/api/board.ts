import { useMutation, useQueryClient, useQuery } from 'react-query';
import axios from 'axios';

export const getBoards = () => {
  return useQuery('boards', () => {
    return axios.get('http://localhost:4000/boards');
  });
};

export const getBoardById = (id: any) => {
  return useQuery('board', () => {
    return axios.get(`http://localhost:4000/boards/${id}`);
  });
};

const addBoard = (board: any) => {
  return axios.post('http://localhost:4000/boards', board);
};

export const useAddBoardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(addBoard, {
    onSuccess: (data) => {
      queryClient.setQueriesData('boards', (oldQueryData: any) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
