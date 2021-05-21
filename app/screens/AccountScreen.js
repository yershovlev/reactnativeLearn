import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../component/Screen";
import ListItem from "../component/ListItem";
import ListItemSeparatorComponent from "../component/ListItemSeparator";
import colors from "../config/colors";
import Icon from "../component/Icon";
import { logout } from "../store/actions/authActions";

import { useSelector, useDispatch } from "react-redux";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Messages",
  },
  {
    title: "My Messages",

    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Lev Iershov"
          subTitle="Beer shop administrator"
          image={require("../assets/beerMan.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={handleLogout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
