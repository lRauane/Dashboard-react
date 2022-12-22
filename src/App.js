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
  background-color: #272d3a;
  border: 2rem;
  @media screen and (min-width: 320px) {
    align-items: center;
    flex-direction: column;
  }
`;

export default App;
