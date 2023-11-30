import TaskCard from "@/components/TaskCard";
import Task from "@/models/Task";
import { connectDB } from '@/libs/mongodb';
import Cooming from './cooming'

export async function loadTasks() {
  await connectDB();
  const tasks = await Task.find();
  return tasks;
}

export default async function HomePage() {
  const tasks = await loadTasks();

  return (
    <div className="grid md:grid-cols-3 gap-2">
      {/* {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))} */}
      <Cooming/>
    </div>
  );
}