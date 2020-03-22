// @flow
import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 3rem 0;
`;

const Header = () => {
  // const [activeItem, setActiveItem] = useState('home');
  // const handleItemClick = item => {
  //   setActiveItem(item);
  // };

  return (
    <StyledHeader>
      <Container>
        <Menu>
          <Menu.Item header>
            <NavLink to="/">Covid-19 CIVIC TECH</NavLink>
          </Menu.Item>
          {/* <Menu.Item
            name="home"
            active={activeItem === 'home'}
            // onClick={handleItemClick}
          >
            <a href="/"
          </Menu.Item> */}
        </Menu>
      </Container>
    </StyledHeader>
  );
};

export default Header;
