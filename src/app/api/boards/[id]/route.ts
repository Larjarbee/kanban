import { NextResponse } from 'next/server';
import connect from '@/utilis/db';
import Boards from '@/models/Boards';

export const GET = async (request: any, { params }: Params) => {
  const { id } = params;

  try {
    await connect();

    const board = await Boards.findById(id);

    return new NextResponse(JSON.stringify(board), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const DELETE = async (request: any, { params }: Params) => {
  const { id } = params;

  try {
    await connect();

    await Boards.findByIdAndDelete(id);

    return new NextResponse('Board has been deleted', { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
