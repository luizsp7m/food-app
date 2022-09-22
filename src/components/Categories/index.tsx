import { View } from "react-native";
import { CategoriesItem } from "../CategoriesItem";
import { Heading } from "../Heading";
import { Container, List } from "./styles";

const DATA = [{
  id: "0",
  imageUrl: "https://img.freepik.com/premium-photo/rice-with-red-fish-green-beans-spinach-black-plate-diet-top-view-free-space-text_187166-26345.jpg?w=740",
  name: "Alimentação"
}, {
  id: "1",
  imageUrl: "https://images.unsplash.com/photo-1516002484455-c1618f088baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  name: "Mercado"
}, {
  id: "2",
  imageUrl: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  name: "Doceria"
}, {
  id: "3",
  imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  name: "Sorveteria"
}, {
  id: "4",
  imageUrl: "https://images.unsplash.com/photo-1553564552-02656d6a2390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  name: "Água e Gás"
}, {
  id: "5",
  imageUrl: "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  name: "Pizzaria"
}];

export function Categories() {
  return (
    <Container>
      <Heading title="Segmentos" buttonText="Conheça agora" />

      <List
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CategoriesItem data={item} />}
        ItemSeparatorComponent={() => <View style={{
          marginHorizontal: 8,
        }} />}
      />
    </Container>
  );
}