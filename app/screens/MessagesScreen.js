import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import ListItem from "../component/ListItem";
import ListItemSeparator from "../component/ListItemSeparator";
import Screen from "../component/Screen";
import ListItemActionDelete from "../component/ListItemActionDelete";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "description description description",
    image: require("../assets/beerMan.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/beerMan.jpeg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("tapped")}
            renderRightActions={() => (
              <ListItemActionDelete
                onPress={() => {
                  handleDelete(item);
                }}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/beerMan.jpeg"),
            },
          ]);
        }}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  renderRightActions: {},
});

export default MessagesScreen;
