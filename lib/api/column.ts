import Column from '@/models/Column';
import connect from '@/utilis/db';
import { handleError } from '../utils';

export const createColumn = async (column: any) => {
  try {
    await connect();

    const newColumn = await Column.create(column);

    return JSON.stringify(newColumn);
  } catch (err) {
    console.log(err);
    return handleError(err);
  }
};

export const getColumnById = async (columnId: string) => {
  try {
    await connect();

    const columns = await Column.find();
    const filteredColumns = columns?.filter(
      (column) => column?.boardId === columnId
    );

    return JSON.parse(JSON.stringify(filteredColumns));
  } catch (err) {
    return handleError(err);
  }
};
