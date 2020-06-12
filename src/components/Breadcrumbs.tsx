import React from "react";
import BreadcrumbComponent from "react-bootstrap/Breadcrumb";
import BreadcrumbItem from "react-bootstrap/BreadcrumbItem";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

interface Breadcrumb {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const StyledNavLink = styled(NavLink)`
  &.active {
    font-weight: bold;
  }
`;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <BreadcrumbComponent>
      {breadcrumbs.map(({ name, path }, index) => {
        const isActive = !breadcrumbs[index + 1];

        return (
          <BreadcrumbItem
            key={index}
            linkAs={(props: Omit<React.PropsWithoutRef<NavLinkProps>, "to">) =>
              isActive ? (
                <span>{name}</span>
              ) : (
                <StyledNavLink exact to={path} {...props} />
              )
            }
          >
            {name}
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbComponent>
  );
};

export default Breadcrumbs;
