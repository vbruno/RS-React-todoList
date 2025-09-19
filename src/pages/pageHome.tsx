import Container from "../components/atomic/container";
import TaskItem from "../components/core/taskItem";
import TaskSummary from "../components/core/taskSummary";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex justify-between">
        <TaskSummary />
      </header>
      <TaskItem />
    </Container>
  )
}
