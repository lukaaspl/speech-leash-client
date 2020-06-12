import { RouteName } from "consts";
import { useHistory } from "react-router-dom";
import { getRoutePath } from "utils/routing";

export const useRedirect = () => {
  const history = useHistory();

  const redirectToRoute = (
    routeName: RouteName,
    params?: Record<string, string>
  ) => {
    const redirectPath = getRoutePath(routeName, params);

    history.push(redirectPath);
  };

  return { redirectToRoute };
};

export default useRedirect;
