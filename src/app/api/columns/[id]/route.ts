import Column from '@/models/Column';
import connect from '@/utilis/db';
import { NextResponse } from 'next/server';

export const GET = async (request: any, { params }: Params) => {
  const { id } = params;

  try {
    await connect();

    const columns = await Column.find();
    const filteredColumns = columns?.filter((column) => column?.boardId === id);

    return new NextResponse(JSON.stringify(filteredColumns), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
