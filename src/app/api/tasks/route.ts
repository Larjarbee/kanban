import { NextResponse } from 'next/server';
import connect from '@/utilis/db';
import Tasks from '@/models/Tasks';

export const GET = async (request: Request) => {
  try {
    await connect();
    const tasks = await Tasks.find();

    return new NextResponse(JSON.stringify(tasks), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();

  try {
    await connect();

    await Tasks.create(body);

    return new NextResponse('Task has been created', { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse('Database Error', { status: 500 });
  }
};
