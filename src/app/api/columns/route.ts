import Column from '@/models/Column';
import connect from '@/utilis/db';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body = await request.json();

  try {
    await connect();

    await Column.create(body);

    return new NextResponse('Column has been created', { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse('Database Error', { status: 500 });
  }
};
