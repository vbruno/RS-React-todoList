import { Outlet } from "react-router";
import Header from "../components/core/header";
import MainContent from "../components/core/main";
import Footer from "../components/core/footer";

export default function LayoutMain() {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  )
}
