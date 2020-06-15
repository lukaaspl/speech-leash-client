import React, { useMemo } from "react";
import BreadcrumbComponent from "react-bootstrap/Breadcrumb";
import BreadcrumbItem from "react-bootstrap/BreadcrumbItem";
import { NavLink, NavLinkProps, useRouteMatch } from "react-router-dom";
import routes from "routes";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &.active {
    font-weight: bold;
  }
`;

const Breadcrumbs: React.FC = () => {
  const match = useRouteMatch<Record<string, string>>();

  const breadcrumbs = useMemo(() => {
    console.log("computing matching routes");

    return routes
      .filter(({ path }) => match.path.includes(path))
      .map(({ path, name }) => {
        const paramNames = Object.keys(match.params);

        if (paramNames.length) {
          const injectedPath = paramNames.reduce(
            (path, paramName) =>
              path.replace(`:${paramName}`, match.params[paramName]),
            path
          );

          return { path: injectedPath, name };
        }

        return { path, name };
      });
  }, [match]);

  console.log("rerendering breadcrumbs component");

  return (
    <BreadcrumbComponent>
      {breadcrumbs.map(({ name, path }, index) => {
        const isActive = !breadcrumbs[index + 1];

        return (
          <BreadcrumbItem
            key={index}
            active={isActive}
            linkAs={(
              props: Omit<React.PropsWithoutRef<NavLinkProps>, "to">
            ) => <StyledNavLink exact to={path} {...props} />}
          >
            {name}
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbComponent>
  );
};

export default Breadcrumbs;
