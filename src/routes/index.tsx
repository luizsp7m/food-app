import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Text, View } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();

function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function Food() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Food Screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="home" screenOptions={{
        headerShown: false,
      }}>
        <Screen name="home" component={Home} />
        <Screen name="search" component={Search} />
        <Screen name="food" component={Food} />
        <Screen name="profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
}