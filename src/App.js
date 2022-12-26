import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}


export const Container = styled.div`
  display: flex;
  height: 97vh;
  border: 2rem;
  @media screen and (min-width: 320px) and (max-width:1080px) {
    align-items: center;
    flex-direction: column;
  }
`;

export default App;
