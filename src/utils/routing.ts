import { RouteName } from "consts";
import { generatePath } from "react-router-dom";
import routes from "routes";

export const getRoutePath = (
  routeName: RouteName,
  params?: Record<string, string>
) => {
  const foundRoute = routes.find(({ name }) => name === routeName);

  if (!foundRoute) {
    throw new Error(`No route found with name ${routeName}`);
  }

  return generatePath(foundRoute.path as string, params);
};
