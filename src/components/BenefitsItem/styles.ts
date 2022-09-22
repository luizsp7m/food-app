import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.65,
})`

`;

export const Image = styled.Image`
  height: 200px;
  width: 150px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.LG };
`;