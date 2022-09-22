import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.PADDING.MD} ${({ theme }) => theme.PADDING.SM};
`;

export const AddressContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  flex-direction: row;
  align-items: center;
`;

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const Menu = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BalanceContainer = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  padding: ${({ theme }) => theme.PADDING.SM} ${({ theme }) => theme.PADDING.MD};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD};
`;

export const BalanceText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Balance = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  position: relative;
  height: 42px;
  width: 42px;
  border-radius: 42px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  margin-left: ${({ theme }) => theme.MARGIN.MD};
`;

export const NotificationContainer = styled.View`
  position: absolute;
  right: -6px;
  bottom: -6px;
  height: 24px;
  width: 24px;
  border-radius: 24px;
  background: ${({ theme }) => theme.COLORS.DANGER};
  justify-content: center;
  align-items: center;
`;

export const NotificationNumber = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`;