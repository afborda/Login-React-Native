import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Home from "../Page/Home";
import Search from "../Page/Search";
import Appointments from "../Page/Appointments";
import Favorites from "../Page/Favorites";
import Profile from "../Page/Profile";

const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Appointments" component={Appointments} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigation;
