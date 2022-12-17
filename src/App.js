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
  /* background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%); */
  border: 2rem;
`;

export default App;
