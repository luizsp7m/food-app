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

      <NavigatorItem onPress={() => navigation.navigate("food")}>
        <Ionicons name="ios-restaurant-outline" size={22} color="#3A3A3A" />
      </NavigatorItem>

      <NavigatorItem onPress={() => navigation.navigate("profile")}>
        <Image source={{
          uri: "https://img.freepik.com/free-vector/cute-astronaut-working-laptop-cartoon-vector-icon-illustration_138676-3472.jpg",
        }} />
      </NavigatorItem>
    </Container>
  );
}