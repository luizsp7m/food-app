import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.65,
})`
  align-items: center;
`;

export const ImageContainer = styled.View`
  border-radius: 200px;
  border: 4px solid ${({ theme }) => theme.COLORS.PRIMARY};
  padding: ${({ theme }) => theme.PADDING.XS};
`;

export const Image = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 64px;
`;

export const Text = styled.Text`
margin-top: ${({ theme }) => theme.MARGIN.MD };
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;