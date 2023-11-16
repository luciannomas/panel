import Task from "@/models/Task";
import { NextResponse } from "next/server";
import { connectDB } from '@/libs/mongodb';

export async function GET() {
  await connectDB();
  const tasks = await Task.find();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newTask = new Task(body);
    const savedTask = await newTask.save();
    return NextResponse.json(savedTask);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}