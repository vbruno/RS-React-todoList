import { useState, type ChangeEvent, type FormEvent } from "react";

import Card from "../atomic/card";
import InputCheckbox from "../atomic/inputCheckbox";
import Text from "../atomic/text";
import IconButton from "../atomic/iconButton";

import TrashIcon from "../../assets/icons/trash-regular.svg?react"
import PencilIcon from "../../assets/icons/pencil-simple-regular.svg?react"
import XIcon from "../../assets/icons/x-regular.svg?react"
import CheckIcon from "../../assets/icons/check-regular.svg?react"
import InputText from "../atomic/inputText";
import { TaskState, type Task } from "../../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
  task: Task
}

export default function TaskItem({ task }: TaskItemProps) {

  const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating)

  const [taskTitle, setTaskTitle] = useState("")

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    setIsEditing(false)
  }

  function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "")
  }

  function handleSaveTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log({ id: task.id, title: taskTitle });


    setIsEditing(false)
  }

  return (
    <form onSubmit={handleSaveTask}>
      <Card size={"md"} className="flex items-center gap-4">
        {!isEditing ?
          <>
            <InputCheckbox
              value={task?.concluded?.toString()}
              checked={task?.concluded}
            />
            <Text className={cx("flex-1", {
              "line-through": task?.concluded,
            })}>{task?.title}</Text>
            <div className="flex gap-1">
              <IconButton icon={TrashIcon} variant={"tertiary"} />
              <IconButton icon={PencilIcon} variant={"tertiary"}
                onClick={handleEditTask}
              />
            </div>
          </>
          :
          <>
            <InputText
              className="w-full"
              onChange={handleChangeTaskTitle}
              required
              autoFocus />
            <div className="flex gap-1">
              <IconButton icon={XIcon} variant={"secondary"}
                onClick={handleExitEditTask}
              />
              <IconButton type="submit" icon={CheckIcon} variant={"primary"} />
            </div>
          </>
        }
      </Card>
    </form>
  )
}
