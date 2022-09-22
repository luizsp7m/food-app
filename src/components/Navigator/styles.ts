import styled from "styled-components/native"

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: ${({ theme }) => theme.PADDING.LG };
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.BORDER };
`;

export const NavigatorItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.65,
})`
`;

export const Image = styled.Image`
  width: 22px;
  height: 22px;
  border-radius: 22px;
`;
