import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import MainButton from "../component/MainButton";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  let file = require("../assets/background.jpg");

  return (
    <ImageBackground style={styles.background} source={file} blurRadius={2}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logoImg}
        />
        <Text style={styles.logoText}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton title="login" onPress={() => routes.LOGIN} />
        <MainButton
          title="register"
          color={colors.secondary}
          onPress={() => routes.REGISTER}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logoImg: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
