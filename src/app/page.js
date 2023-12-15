import TaskCard from "@/components/TaskCard";
import Task from "@/models/Task";
import { connectDB } from '@/libs/mongodb';
import Cooming from './cooming'
import Navbar from './Navbar'
import ProductList from "./ProductList";
import ProductsView from '../components/ProductsView/page';
import HomeLayout from '../layouts/HomeLayout/page'

export async function loadTasks() {
  await connectDB();
  const tasks = await Task.find();
  return tasks;
}

export default async function HomePage() {
  const tasks = await loadTasks();

  return (
    <>
      {/* {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))} */}
      {/* <Navbar/>
      
      */}
      <HomeLayout>
        {/* <ProductsView />  */}
        
      </HomeLayout>
      
    </>
  );
}