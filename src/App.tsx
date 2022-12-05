import React, {FC} from 'react';
import { Route, Routes } from 'react-router-dom';
import Eva from './components/Eva';
import NavBar from './components/NavBar';
import Text from './components/Text'

const App: FC = () => {
  return (
    <>
    <NavBar/>
    <Text/>
    <Routes>
      <Route element={<Eva />} path="/eva" />
    </Routes>
    </>
  );
}

export default App;
