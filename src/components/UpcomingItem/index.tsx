import { Container, ImageContainer, Image, Text } from "./styles";

export interface UpcomingItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

interface Props {
  data: UpcomingItemProps;
}

export function UpcomingItem({ data }: Props) {
  return (
    <Container>
      <ImageContainer>
        <Image source={{
          uri: data.imageUrl
        }} />
      </ImageContainer>

      <Text>{data.name}</Text>
    </Container>
  );
}