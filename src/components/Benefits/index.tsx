import { List } from "./styles";
import { BenefitsItem } from "../BenefitsItem";
import { View } from "react-native";

const DATA = [
  "https://media.istockphoto.com/vectors/woman-cartoon-with-shop-local-banner-in-store-vector-design-vector-id1257809462?k=20&m=1257809462&s=170667a&w=0&h=yjqkL84MLplsEnnAV8rJUQzQhBvYNnmAlPvZIzoihUc=",
  "https://img.freepik.com/premium-vector/contactless-delivery-cartoon-courier-carrying-parcel-customers-door-people-quarantine-receive-packages-vector-illustration-delivery-service-banner-with-woman-background-door-package_176516-1793.jpg?w=900",
  "https://img.freepik.com/free-vector/crypto-portfolio-concept-illustration_114360-4794.jpg?w=826&t=st=1663816817~exp=1663817417~hmac=656101e6eaa33ff4f3d43edf1df4ac21352cd2fe422422712af71d9c997b1a63",
  "https://img.freepik.com/free-vector/brain-chemistry-concept-illustration_114360-10136.jpg?w=740&t=st=1663816831~exp=1663817431~hmac=22de777ed15da8571c819501e389b050c0fae20916c61ed6c818bcc13f9f12e5",
  "https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=826&t=st=1663816834~exp=1663817434~hmac=940fe39fb8cfce8a38aff05523150f65c0644814d7cbb23baf85fe6fd100228b",
  "https://img.freepik.com/free-vector/blue-monday-concept-illustration_114360-4330.jpg?t=st=1663807520~exp=1663808120~hmac=36b822d3fa3df63d7d0a02d0b040afb15fb73e8aaad79083491e2d53076ca9d0"
];

export function Benefits() {
  return (
    <List
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={DATA}
      keyExtractor={item => item}
      renderItem={({ item }) => <BenefitsItem imageUrl={item} />}
      ItemSeparatorComponent={() => <View style={{
        marginHorizontal: 6,
      }} />}
    />
  );
}