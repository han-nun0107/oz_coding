import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
`;

function App() {
  return (
    <main>
      <Header />
      <SectionContainer>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </SectionContainer>
    </main>
  );
}

export default App;
