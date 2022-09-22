import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import {
  Container,
  AddressContainer,
  Address,
  Menu,
  BalanceContainer,
  BalanceText,
  Balance,
  Button,
  NotificationContainer,
  NotificationNumber,
} from "./styles";

export function Header() {
  return (
    <Container>
      <AddressContainer>
        <Address>Rua Drago, 723</Address>
        <Entypo name="chevron-small-down" size={20} color="black" />
      </AddressContainer>

      <Menu>
        <BalanceContainer>
          <BalanceText>Saldo</BalanceText>
          <Balance>R$ 10,00</Balance>
        </BalanceContainer>

        <Button>
          <Ionicons name="notifications-outline" size={20} color="black" />
          <NotificationContainer>
            <NotificationNumber>
              20
            </NotificationNumber>
          </NotificationContainer>
        </Button>

        <Button>
          <Ionicons name="chatbubbles-outline" size={20} color="black" />
        </Button>
      </Menu>
    </Container>
  );
}