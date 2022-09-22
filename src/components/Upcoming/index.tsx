import { View } from "react-native";
import { Heading } from "../Heading";
import { UpcomingItem } from "../UpcomingItem";
import { Container, List } from "./styles";

const DATA = [{
  id: "0",
  imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  name: "Novidades",
}, {
  id: "1",
  imageUrl: "https://img.freepik.com/free-photo/acai-smoothie-coconut-shell_53876-124340.jpg?w=826&t=st=1663819195~exp=1663819795~hmac=f2f5dfd9028748e7a12a894e7fb7a96b96de93f6fc5e998cacb1d28ab0a59027",
  name: "Açai",
}, {
  id: "2",
  imageUrl: "https://images.unsplash.com/photo-1623660053975-cf75a8be0908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  name: "Chocolate",
}, {
  id: "3",
  imageUrl: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  name: "Frutas",
}, {
  id: "4",
  imageUrl: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
  name: "Sucos",
}, {
  id: "5",
  imageUrl: "https://images.unsplash.com/photo-1550087560-0d40289f48ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  name: "Legumes",
}];

export function Upcoming() {
  return (
    <Container>
      <Heading title="O que há de novo por aqui?" />

      <List
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <UpcomingItem data={item} />}
        ItemSeparatorComponent={() => <View style={{
          marginHorizontal: 8,
        }} />}
      />
    </Container>
  );
}