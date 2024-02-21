import HomePage from './pages/HomePage';
import SlidesPage from './pages/SlidesPage';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <ChakraProvider>
          <h1>Hola Amigos</h1>
          <Flex justifyContent='space-between' flexDirection='column' width='60%' maxWidth='500px' margin='30px auto'>
            <NavLink to='/'>HomePage</NavLink>
            <NavLink to='/slides'>Slides</NavLink>
          </Flex>

          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/slides' element={<SlidesPage />}></Route>
          </Routes>
        </ChakraProvider>
      </HashRouter>
    </div>
  );
}

export default App;
