import Badge from "../atomic/badge";
import Text from "../atomic/text";

export default function TaskSummary() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className="!text-gray-300" >Tarefas criadas</Text>
        <Badge variant={"secondary"}>5</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className="!text-gray-300" >Tarefas concluídas</Text>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>
    </>
  )
}
