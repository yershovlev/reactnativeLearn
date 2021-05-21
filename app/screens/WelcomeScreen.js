import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import MainButton from "../component/MainButton";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  let file = require("../assets/backgroundLogos.jpg");

  return (
    <ImageBackground style={styles.background} source={file} blurRadius={5}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/beerLogo.png")}
          style={styles.logoImg}
        />
        <Text style={styles.logoText}>Drink more beer!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton
          title="login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <MainButton
          title="register"
          onPress={() => navigation.navigate(routes.REGISTER)}
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
    width: 130,
    height: 200,
  },
  logoText: {
    fontSize: 22,
    color: colors.dark,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
