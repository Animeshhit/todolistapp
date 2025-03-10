import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/Sidebars/LeftSideBar/LeftSideBar";
import RightSidebar from "./components/Sidebars/RightSideBar/RightSideBar";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "./components/shared/Container";
import Styled from "styled-components";

const LayoutContainer = Styled.div`
  display:flex;
`;

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container>
        <LayoutContainer>
          <LeftSidebar />
          <main>
            <Outlet />
          </main>
          <RightSidebar />
        </LayoutContainer>
      </Container>
    </>
  );
}
