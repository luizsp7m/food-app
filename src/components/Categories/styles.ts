import styled from "styled-components/native";

import { FlatList, FlatListProps } from "react-native";
import { CategoryItemProps } from "../CategoriesItem";

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.MARGIN.XL};
`;

export const List = styled(FlatList as new (props: FlatListProps<CategoryItemProps>) => FlatList<CategoryItemProps>)`

`;