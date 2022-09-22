import { List } from "./styles";
import { BenefitsItem } from "../BenefitsItem";
import { View } from "react-native";

const DATA = [
  "https://img.freepik.com/free-vector/cute-burger-chef-thumbs-up-cartoon-icon-illustration-food-chef-icon-isolated-flat-cartoon-style_138676-3109.jpg?w=826&t=st=1663824783~exp=1663825383~hmac=82ffc4a99a5637f1881967141b2b9a399b9208207d1d4e5b16c932d569779c2e",
  "https://img.freepik.com/free-vector/cute-diver-put-fish-trolley-cartoon-vector-icon-illustration-science-animal-icon-isolated_138676-5639.jpg?w=826&t=st=1663824750~exp=1663825350~hmac=c047ce615e99a1f570034b6d503430b0fbef5a1f1f8000e6c5520d853de0470f",
  "https://img.freepik.com/free-vector/cute-blue-tyrannosaurus-rex_138676-2073.jpg?t=st=1663798271~exp=1663798871~hmac=ebe1be998e3db5bc37a2e86cdbb7cc6a808bce2def2aa5e3b886b2fc91229a72",
  "https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=826&t=st=1663824784~exp=1663825384~hmac=6b0265257c9aef4000ff6fbccef8ec14a96a3c2744fcbf46706c15ffb0252f14",
  "https://img.freepik.com/free-vector/hotdog-cartoon-icon-illustration_138676-2449.jpg?t=st=1663800556~exp=1663801156~hmac=1400e3063dd5361d93c79589e6ae0f12b5d6804f1514789de7d12168248fc66d",
  "https://img.freepik.com/free-vector/astronaut-working-laptop-writing-cartoon-illustration-science-business-concept-isolated-flat-cartoon-style_138676-3447.jpg"
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