import React from 'react'
import { TaskForm } from '../components/TaskForm'

export const CreateTask = ({onTaskCreated}) => {
  return (
    <>
        <TaskForm onTaskCreated={onTaskCreated}/>
    </>
  )
}
