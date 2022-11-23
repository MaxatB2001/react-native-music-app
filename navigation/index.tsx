/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  AuthParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  SearchTabParamList,
  TabOneParamList,
  UserTabParamList,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeScreen from "../screens/HomeScreen";
import AlbumScreen from "../screens/AlbumScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { useTypedSelector } from "../hooks/useTypedSelector";
import UserScreen from "../screens/UserScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import TracksScreen from "../screens/TracksScreen";
import ArtistsScreen from "../screens/ArtistsScreen";
import { useActions } from "../hooks/useActions";
import { getUser } from "../api/userApi";
import ArtistScreen from "../screens/ArtistScreen";
import NewReleasesScreen from "../screens/NewReleasesScreen";
import ChartScreen from "../screens/ChartScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const { token } = useTypedSelector((state) => state.userReducer);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {token !== null ? <RootNavigator /> : <AuthTabNavigator />}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const user = useTypedSelector((state) => state.userReducer.user);
  const { setUser } = useActions();
  if (user === null) {
    getUser().then((data) => setUser(data));
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={SearchTabNavigator}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <EvilIcons
              name="search"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="UserScreen"
        component={UserStackNavigator}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          headerTitle: "Профиль",
          tabBarIcon: ({ color }) => (
            <EvilIcons
              name="heart"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createNativeStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Главная" }}
      />

      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: "Album" }}
      />

      <TabOneStack.Screen
        name="NewReleasesScreen"
        component={NewReleasesScreen}
        options={{ headerTitle: "Новые релизы" }}
      />

<TabOneStack.Screen
        name="ChartScreen"
        component={ChartScreen}
        options={{ headerTitle: "Чарт" }}
      />
    </TabOneStack.Navigator>
  );
}

const SearchTabStack = createNativeStackNavigator<SearchTabParamList>();

function SearchTabNavigator() {
  return (
    <SearchTabStack.Navigator>
      <SearchTabStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Поиск" }}
      />
      <SearchTabStack.Screen name="AlbumScreen" component={AlbumScreen} />
    </SearchTabStack.Navigator>
  );
}

const AuthStack = createNativeStackNavigator<AuthParamList>();

function AuthTabNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerBackTitle: ""}}/>
    </AuthStack.Navigator>
  );
}

const UserStack = createNativeStackNavigator<UserTabParamList>();

function UserStackNavigator() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerTitle: "Коллекция" }}
      />
      <UserStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: "Album", headerBackTitle: "" }}
      />
      <UserStack.Screen
        name="AlbumsScreen"
        component={AlbumsScreen}
        options={{ headerTitle: "Альбомы", headerBackTitle: "" }}
      />
      <UserStack.Screen
        name="TracksScreen"
        component={TracksScreen}
        options={{ headerTitle: "Треки", headerBackTitle: "" }}
      />
      <UserStack.Screen
        name="ArtistsScreen"
        component={ArtistsScreen}
        options={{ headerTitle: "Исполнители", headerBackTitle: "" }}
      />
      <UserStack.Screen
        name="ArtistScreen"
        component={ArtistScreen}
        options={{ headerTitle: "Исполнитель", headerBackTitle: "" }}
      />
    </UserStack.Navigator>
  );
}
