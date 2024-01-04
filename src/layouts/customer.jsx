import { Outlet } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
export default function CustomerLayout() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Customer</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Outlet key="customer-layout" />
      </Container>
    </>
  );
}
