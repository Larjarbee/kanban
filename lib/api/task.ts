import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const addTask = ({ id, task }: any) => {
  return axios.patch(`http://localhost:4000/boards/${id}`, task);
};

export const useAddTaskMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(addTask, {
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
