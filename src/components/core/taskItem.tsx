import { useState } from "react";

import Card from "../atomic/card";
import InputCheckbox from "../atomic/inputCheckbox";
import Text from "../atomic/text";
import IconButton from "../atomic/iconButton";

import TrashIcon from "../../assets/icons/trash-regular.svg?react"
import PencilIcon from "../../assets/icons/pencil-simple-regular.svg?react"
import XIcon from "../../assets/icons/x-regular.svg?react"
import CheckIcon from "../../assets/icons/check-regular.svg?react"
import InputText from "../atomic/inputText";

export default function TaskItem() {

  const [isEditing, setIsEditing] = useState(false)

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    setIsEditing(false)
  }

  return (
    <Card size={"md"} className="flex items-center gap-4">
      {!isEditing ?
        <>
          <InputCheckbox />
          <Text className="flex-1">Fazer compras da semana</Text>
          <div className="flex gap-1">
            <IconButton icon={TrashIcon} variant={"tertiary"} />
            <IconButton icon={PencilIcon} variant={"tertiary"}
              onClick={handleEditTask}
            />
          </div>
        </>
        :
        <>
          <InputText className="w-full" />
          <div className="flex gap-1">
            <IconButton icon={XIcon} variant={"secondary"}
              onClick={handleExitEditTask}
            />
            <IconButton icon={CheckIcon} variant={"primary"} />
          </div>
        </>
      }
    </Card>
  )
}
