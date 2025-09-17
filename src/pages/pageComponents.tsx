import Badge from "../components/badge";
import Button from "../components/button";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import IconButton from "../components/iconButton";
import InputCheckbox from "../components/inputCheckbox";
import InputText from "../components/inputText";
import Skeleton from "../components/skeleton";
import Text from "../components/text"

import TrashIcon from "../assets/icons/trash-regular.svg?react"
import CheckIcon from "../assets/icons/check-regular.svg?react"
import ClipboardIcon from "../assets/icons/clipboard-text.svg?react"
import PencilIcon from "../assets/icons/pencil-simple-regular.svg?react"
import PlusIcon from "../assets/icons/plus-regular.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import XIcon from "../assets/icons/x-regular.svg?react"

export function PageComponents() {
  return (
    <Container className="space-y-5">
      <div className=" flex flex-col gap-3 items-center justify-center">
        <div className="text-3xl font-bold underline">
          Hello World!
        </div>
        <Text variant="body-sm-bold">Testando o componente Text</Text>
        <Text>Testando o componente Text</Text>
        <Text className="text-pink-light" variant={"body-md-bold"}>Testando o componente Text</Text>
      </div>

      <div className="flex gap-1 items-center justify-center">
        <Icon svg={TrashIcon} />
        <Icon svg={CheckIcon} />
        <Icon svg={ClipboardIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={XIcon} />
      </div>

      <div className="flex gap-1 items-center justify-center">
        <Badge variant={"secondary"}> 5</Badge>
        <Badge variant={"primary"}> 2 de 5</Badge>
        <Badge loading >12131</Badge>

      </div>

      <div className="flex gap-1 items-center justify-center" >
        <Button icon={PlusIcon} >Nova tarefa</Button>
      </div>

      <div className="flex gap-1 items-center justify-center">
        <IconButton icon={TrashIcon} />
        <IconButton icon={CheckIcon} variant={"secondary"} />
        <IconButton icon={PencilIcon} variant={"tertiary"} />
        <IconButton icon={PencilIcon} variant={"tertiary"} loading />
      </div>

      <div className="flex gap-1 items-center justify-center">
        <InputText />
      </div>

      <div className="flex gap-1 items-center justify-center">
        <InputCheckbox />
        <InputCheckbox loading />
      </div>

      <div className="flex gap-1 items-center justify-center">
        <Card size={"md"}> Ola Mundo!</Card>
      </div>

      <div className="items-center justify-center space-y-5">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6 w-96" />
      </div>
    </Container>
  )
}
