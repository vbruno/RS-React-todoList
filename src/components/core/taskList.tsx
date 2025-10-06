import Button from "../atomic/button";

import PlusIcon from "../../assets/icons/plus-regular.svg?react"
import TaskItem from "./taskItem";
import { useTasks } from "../../hooks/useTasks";
import { useTask } from "../../hooks/useTask";

export default function TaskList() {

  const { tasks } = useTasks();
  const { prepareTask } = useTask();

  console.log(tasks);

  function handleNewTask() {
    prepareTask()
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
        >Nova Tarefa</Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  )
}
