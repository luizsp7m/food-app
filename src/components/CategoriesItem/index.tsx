import { Container, Image, Text } from "./styles";

export interface CategoryItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

interface Props {
  data: CategoryItemProps;
}

export function CategoriesItem({ data }: Props) {
  return (
    <Container>
      <Image source={{
        uri: data.imageUrl,
      }} />

      <Text>{data.name}</Text>
    </Container>
  );
}