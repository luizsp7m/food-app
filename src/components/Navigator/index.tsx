import { Ionicons } from "@expo/vector-icons";
import { Container, NavigatorItem, Image } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Navigator() {
  const navigation  = useNavigation();

  return (
    <Container>
      <NavigatorItem onPress={() => navigation.navigate("home")}>
        <Ionicons name="home-outline" size={22} color="#53B15E " />
      </NavigatorItem>

      <NavigatorItem onPress={() => navigation.navigate("search")}>
        <Ionicons name="search" size={22} color="#3A3A3A" />
      </NavigatorItem>

      <NavigatorItem onPress={() => navigation.navigate("restaurants")}>
        <Ionicons name="ios-restaurant-outline" size={22} color="#3A3A3A" />
      </NavigatorItem>

      <NavigatorItem onPress={() => navigation.navigate("profile")}>
        <Image source={{
          uri: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        }} />
      </NavigatorItem>
    </Container>
  );
}