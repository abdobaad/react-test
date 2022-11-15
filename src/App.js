import React, { useContext } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { AppContext } from "./Context";

import Header from './Componenets/Header';
import Home from './Componenets/Home';
import Login from './Componenets/Login';
import Posts from './Componenets/Posts';

const PrivateRoute = ( props ) => {
  return props.auth ? <Outlet /> : <Navigate to="/login" />;
};

const NotLogedUser = ( props ) => {
  return !props.auth ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  const { isAuth } = useContext(AppContext);

  return (
    <>
     <Header />
     <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<NotLogedUser auth={isAuth} />}>
          <Route exact path='/login' element={<Login />} />
        </Route>
        <Route exact path='/posts' element={<PrivateRoute auth={isAuth} />}>
            <Route exact path='/posts' element={<Posts />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
