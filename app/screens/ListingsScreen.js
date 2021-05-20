import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useState } from "react/cjs/react.development";
import { useSelector, useDispatch } from "react-redux";

import colors from "../config/colors";
import Card from "../component/Card";
import Screen from "../component/Screen";
import routes from "../navigation/routes";
import { getListings } from "../store/actions/listingActions";

function ListingsScreen({ navigation }) {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    dispatch(getListings());
  };

  console.log("listings?.values()" + Array.from(listings?.values()));

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={Array.from(listings?.values())}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price + " hrn"}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
