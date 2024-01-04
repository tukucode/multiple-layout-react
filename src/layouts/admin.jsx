import { Outlet } from "react-router-dom";

import { Navbar, Container } from "react-bootstrap";
export default function AdminLayout() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Outlet key="admin-layout" />
      </Container>
    </>
  );
}
