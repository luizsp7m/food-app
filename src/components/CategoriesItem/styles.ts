import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.65,
})`
  align-items: center;
`;

export const Image = styled.Image`
  height: 140px;
  width: 105px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.LG};
  border: 4px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;

export const Text = styled.Text`
  margin-top: ${({ theme }) => theme.MARGIN.MD };
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;