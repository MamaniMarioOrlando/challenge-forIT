import { TaskList } from '../components/TaskList'

export const Home = ({tasks}) => {
  return (
    <>
      <TaskList tasks={tasks}/>
    </>
  )
}
