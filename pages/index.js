import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import styled from 'styled-components';
import { Text } from "../src/components/foundation/Text";
import { Button } from "../src/components/commons/Button";
import { Grid } from '../src/components/foundation/layout/Grid';

const HomeWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Home() {
  return <HomeWrapper>
    <Menu />
    <Grid.Container>
      <Grid.Row>
        <Grid.Column offset={{ xs: 0, md: 1 }} value={{ xs: 12, md: 5 }}>
          <Text tag="h1" variant="title" color="tertiary.main" textAlign={{ xs: "center", md: "start" }}>Compartilhe momentos e conecte-se com amigos</Text>
          <Text tag="p" variant="paragraph1" color="tertiary.light">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
          </Text>
          <Button variant="primary.main" display="block" margin={{ xs: "auto", md: "initial" }}>Cadastrar</Button>
        </Grid.Column>
        <Grid.Column value={{ xs: 12, md: 6 }}>
          <img src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            style={{ display: 'block', margin: 'auto' }} />
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
    <Footer></Footer>
  </HomeWrapper>
}
