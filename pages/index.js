import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import styled from 'styled-components';
import { Text } from "../src/components/foundation/Text";
import { Button } from "../src/components/commons/Button";

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
    <div>
      <Text tag="h1" variant="title" color="tertiary.main" textAlign={{ xs: "center", md: "start" }}>Compartilhe momentos e conecte-se com amigos</Text>
      <Text tag="p" variant="paragraph1" color="tertiary.light">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
      </Text>
      <Button variant="primary.main" display="block" margin={{ xs: "auto", md: "initial" }}>Cadastrar</Button>
    </div>
    <Footer></Footer>
  </HomeWrapper>
}
