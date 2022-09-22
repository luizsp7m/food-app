import { Heading } from "../Heading";
import { Container, ImageContainer, Image } from "./styles";

export function Hero() {
  return (
    <Container>
      <Heading title="Ofertas Especiais" buttonText="Ver todas" />

      <ImageContainer>
        <Image source={{
          uri: "https://i.ibb.co/tCP99Vx/label-consumer-week-in-portuguese-3d-render-7.jpg"
        }} />
      </ImageContainer>
    </Container>
  );
}