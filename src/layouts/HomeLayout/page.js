// import TaskCard from "@/components/TaskCard";
import Task from "@/models/Task";
import { connectDB } from '@/libs/mongodb';
import Navbar from '../../app/Navbar'
// import ProductsView from '../components/ProductsView/page';
import Header from './Header/page';
import Footer from '../Footer/page';

export async function loadTasks() {
  await connectDB();
  const tasks = await Task.find();
  return tasks;
}

export default async function HomePage({children}) {
  const tasks = await loadTasks();
  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];

  return (
    <>
      {/* {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))} */}
      <Navbar/> 
      <Header title="Blog" sections={sections} />
      {/* <ProductsView /> */}
      {children}
      <Footer/>
      
    </>
  );
}