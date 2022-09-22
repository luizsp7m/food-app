import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator
        size={18}
        color={"#53B15E"}
      />
    </Container>
  );
}