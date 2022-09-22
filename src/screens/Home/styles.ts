import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500 };
`;

export const Main = styled.ScrollView`
  padding: 0 ${({ theme }) => theme.PADDING.SM};
`;