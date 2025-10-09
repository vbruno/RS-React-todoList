import { useTasks } from "../../hooks/useTasks";
import Badge from "../atomic/badge";
import Text from "../atomic/text";

export default function TaskSummary() {

  const { tasksCount, concludedTaskCount } = useTasks()

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className="!text-gray-300" >Tarefas criadas</Text>
        <Badge variant={"secondary"}>{tasksCount}</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className="!text-gray-300" >Tarefas concluídas</Text>
        <Badge variant={"primary"}>{concludedTaskCount} de {tasksCount}</Badge>
      </div>
    </>
  )
}
