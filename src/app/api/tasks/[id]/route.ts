import { NextResponse } from 'next/server';
import connect from '@/utilis/db';
import Tasks from '@/models/Tasks';

export const GET = async (request: any, { params }: Params) => {
  const { id } = params;

  try {
    await connect();

    const tasks = await Tasks.find();
    const filteredTasks = tasks?.filter((task) => task?.boardId === id);

    return new NextResponse(JSON.stringify(filteredTasks), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request: any) => {
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

export const DELETE = async (request: any, { params }: Params) => {
  const { id } = params;

  try {
    await connect();
    await Tasks.findByIdAndDelete(id);

    return new NextResponse('Task deleted', { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse('Database Error', { status: 500 });
  }
};
