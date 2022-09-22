import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.MARGIN.XL};
`;

export const ImageContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.65,
})``;

export const Image = styled.Image`
  height: 210px;
  width: 100%;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.LG};
`;