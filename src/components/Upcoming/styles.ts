import styled from "styled-components/native";

import { FlatList, FlatListProps } from "react-native";
import { UpcomingItemProps } from "../UpcomingItem";

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.MARGIN.XL};
`;

export const List = styled(FlatList as new (props: FlatListProps<UpcomingItemProps>) => FlatList<UpcomingItemProps>)`

`;