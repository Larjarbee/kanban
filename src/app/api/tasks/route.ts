import { NextResponse } from 'next/server';
import connect from '@/utilis/db';
import Tasks from '@/models/Tasks';

export const GET = async (req: any) => {
  try {
    await connect();
    const tasks = await Tasks.find();

    return new NextResponse(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new NextResponse('Database error ', { status: 501 });
  }
};

export const POST = async (request: any) => {
  const body = await request.json();

  const newTasks = new Tasks(body);

  try {
    await connect();

    await newTasks.save();

    return new NextResponse('Task has been created', { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse('Database Error', { status: 500 });
  }
};
