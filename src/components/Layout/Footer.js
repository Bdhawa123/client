// @flow
import React from 'react';
import { Container, Grid, Image, List } from 'semantic-ui-react';

import styled from 'styled-components/macro';

const logoHackathon = require('../../images/logo-wirvsvirus.png');

const StyledFooter = styled.footer`
  margin: 3rem 0 0;
  padding: 3rem 0;
  background: lightgray;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Image src={logoHackathon} style={{ width: 250 }} />
            </Grid.Column>
            <Grid.Column />
            <Grid.Column>
              <List>
                <List.Header>Join us on</List.Header>
                <List.Item>
                  <List.Icon name="github" size="large" />
                  <List.Content verticalAlign="middle">
                    <a href="https://github.com/covid19-civictechTEAM">
                      Github
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="slack" size="large" />
                  <List.Content verticalAlign="middle">
                    <a href="https://join.slack.com/t/covid-19civictech/shared_invite/zt-cz5jx2np-FweuQCaxTTZQUWW7a1GAyA">
                      Slack
                    </a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
