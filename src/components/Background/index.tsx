import React from 'react';

import { Main, Rocket, HeaderMain, Title, TitleDo, Header } from './style';

export function Background() {
  return (
    <Main>
      <HeaderMain>
        <Header>
          <Rocket source={require('../../assets/rocket.png')} />
          <Title> to</Title>
          <TitleDo>do</TitleDo>
        </Header>
      </HeaderMain>
    </Main>
  );
}
