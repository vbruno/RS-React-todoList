import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";

export function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTaskCount: tasks.filter((task) => task.concluded ).length
  }
}
