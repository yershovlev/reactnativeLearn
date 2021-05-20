import React from "react";

import { useSelector, useDispatch } from "react-redux";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const BaseNavigator = () => {
  const userLogedin = useSelector((state) => state.login);
  console.log("usssser  " + userLogedin);

  return <>{userLogedin ? <AppNavigator /> : <AuthNavigator />}</>;
};

export default BaseNavigator;
