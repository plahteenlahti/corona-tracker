import React from 'react';
import styled from 'styled-components/native';
import {Theme} from 'src/Types/Theme';

const DataSource = () => {
  return (
    <Container>
      <About>
        The following data comes from a open data source provided by Helsingin
        Sanomat. The developer of this app is not accountable for errors in the
        data.
      </About>
    </Container>
  );
};

export default DataSource;

const Container = styled.View`
  margin: 30px 20px;
  border-top-color: ${({theme}: {theme: Theme}) => theme.colors.primaryText};
  border-top-width: 1px;
  padding: 10px 0px;
`;

const About = styled.Text`
  color: ${({theme}: {theme: Theme}) => theme.colors.primaryText};
  font-size: 15px;
  text-align: center;
`;
