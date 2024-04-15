import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../outlines/Header';
import Footer from '../outlines/Footer';

const MainBox = styled.main`
  min-height:650px;
`;

const MainLayout = () => {
  return (
    <>
      <Header />
      <mainBox>
        <Outlet />
      </mainBox>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);