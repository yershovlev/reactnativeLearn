import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingsScreen from "../screens/ListingsScreen";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import TestRedux from "../component/TestRedux";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={{
          tabBarLabel: "Listing",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Test"
        component={TestRedux}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
