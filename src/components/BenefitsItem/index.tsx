import { Container, Image } from "./styles";

interface Props {
  imageUrl: string;
}

export function BenefitsItem({ imageUrl }: Props) {
  return (
    <Container>
      <Image source={{
        uri: imageUrl,
      }} />
    </Container>
  );
}