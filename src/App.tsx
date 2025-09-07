import { Text } from "./components/text";

export default function App() {

  return (
    <div className="h-screen flex items-center justify-center bg-gray-400 text-white">
      <div className="text-3xl font-bold underline">
        Hello World!
      </div>
      <Text variant="body-sm-bold" className="text-white">Testando o componente Text</Text>
      <Text className="text-white">Testando o componente Text</Text>
    </div>
  )
}
