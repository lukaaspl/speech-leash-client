import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.sizes.l};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.weights.bold};
`;

const StyledNavLink = styled(Nav.Link)`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.white} !important;
  padding: 5px 8px;
  border-radius: 4px;
  transition: 0.2s;

  :first-child {
    margin-left: 8px;
  }

  :hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavbarComponent = () => (
  <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
    <Navbar.Brand as={Link} to="/">
      <Logo>SpeechLeash</Logo>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <StyledNavLink as={NavLink} exact to="/" className="nav-link">
          Dashboard
        </StyledNavLink>
        <StyledNavLink as={NavLink} to="/phrases" className="nav-link">
          Phrase list
        </StyledNavLink>
        <StyledNavLink as={NavLink} to="/new-phrase" className="nav-link">
          New phrase
        </StyledNavLink>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="e.g. sophisticated"
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarComponent;
