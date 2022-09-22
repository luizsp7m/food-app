import { StatusBar } from "react-native";
import { Benefits } from "../../components/Benefits";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Navigator } from "../../components/Navigator";
import { Upcoming } from "../../components/Upcoming";
import { Container, Main } from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <Header />

      <Main showsVerticalScrollIndicator={false}>
        <Benefits />
        <Categories />
        <Hero />
        <Upcoming />
      </Main>

      <Navigator />
    </Container>
  );
}