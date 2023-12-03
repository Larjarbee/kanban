import { NextResponse } from 'next/server';
import connect from '@/utilis/db';
import Boards from '@/models/Boards';

export const GET = async (req: any) => {
  try {
    await connect();
    const boards = await Boards.find();

    return new NextResponse(JSON.stringify(boards), { status: 200 });
  } catch (error) {
    return new NextResponse('Database error', { status: 501 });
  }
};

export const POST = async (request: any) => {
  const body = await request.json();

  try {
    await connect();

    await Boards.create(body);

    return new NextResponse('Board has been created', { status: 201 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
