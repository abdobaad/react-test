import { Route, Routes } from 'react-router-dom';
import Header from './Componenets/Header';
import Home from './Componenets/Home';
import Login from './Componenets/Login';
import Posts from './Componenets/Posts';

function App() {
  return (
    <>
     <Header />
     <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/posts' element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
