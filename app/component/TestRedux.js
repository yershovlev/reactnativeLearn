import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import { useSelector, useDispatch } from "react-redux";
import Screen from "./Screen";
import { getListings } from "../store/actions/listingActions";

function TestRedux(props) {
  const result = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  const fetchMovies = () => dispatch(getListings());

  const handleOnPress = () => {
    console.log("before");
    fetchMovies();
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AppButton title="fetch element" onPress={handleOnPress}></AppButton>
        <AppTextInput>{result?.get(101)?.title}</AppTextInput>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TestRedux;
