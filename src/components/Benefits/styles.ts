import styled from "styled-components/native";

import { FlatList, FlatListProps } from "react-native";

export const List = styled(FlatList as new (props: FlatListProps<string>) => FlatList<string>)`
  margin-bottom: ${({ theme }) => theme.MARGIN.XL};
`;