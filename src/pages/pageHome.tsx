import Container from "../components/atomic/container";
import TaskList from "../components/core/taskList";
import TaskSummary from "../components/core/taskSummary";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex justify-between">
        <TaskSummary />
      </header>
      <TaskList />
    </Container>
  )
}
