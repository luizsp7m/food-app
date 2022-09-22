import { Container, Title, Button, ButtonText } from "./styles";

interface Props {
  title: string;
  buttonText?: string
}

export function Heading({ title, buttonText }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      {buttonText && (
        <Button>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      )}
    </Container>
  );
}