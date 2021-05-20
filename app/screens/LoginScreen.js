import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import Screen from "../component/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../component/forms";
import { loginAction } from "../store/actions/authActions";
import { getListings } from "../store/actions/listingActions";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }) => {
    dispatch(loginAction(email, password));
  };

  const userLogedin = useSelector((state) => state.login);

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      {typeof userLogedin === "boolean" && (
        <ErrorMessage
          error="Invalid username or password"
          visible={!userLogedin}
        />
      )}
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
