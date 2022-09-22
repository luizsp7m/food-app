import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.MARGIN.LG};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  padding: ${({ theme }) => theme.PADDING.SM} ${({ theme }) => theme.PADDING.MD};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD};
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT_TERTIARY};
`;