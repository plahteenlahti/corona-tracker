import React from 'react';
import styled from 'styled-components/native';
import AnimateNumber from 'react-native-animate-number';
import {Theme} from 'src/Types/Theme';

interface Props {
  confirmed: number | any;
  deaths: number | any;
  recovered: number | any;
}

const Counter = (props: Props) => {
  const {confirmed, deaths, recovered} = props;
  return (
    <Container>
      <Title>Infected</Title>
      <AllCases
        value={confirmed}
        formatter={(val: any) => {
          return parseInt(val);
        }}
      />

      <Row>
        <Column>
          <H3>Deaths</H3>
          <Deaths
            value={deaths}
            formatter={(val: any) => {
              return parseInt(val);
            }}
          />
        </Column>

        <Column>
          <H3>Recovered</H3>
          <Deaths
            value={recovered}
            formatter={(val: any) => {
              return parseInt(val);
            }}
          />
        </Column>
      </Row>
    </Container>
  );
};

export default Counter;

const Container = styled.View``;

const Title = styled.Text``;

const AllCases = styled(AnimateNumber)`
  margin: 20px;
  font-weight: bold;
  font-size: 46px;
  text-align: center;
  color: ${({theme}: {theme: Theme}) => theme.colors.primaryText};
`;

const Row = styled.View`
  flex-direction: row;
`;

const Column = styled.View``;

const H3 = styled.Text`
  margin: 20px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  color: ${({theme}: {theme: Theme}) => theme.colors.primaryText};
`;

const Deaths = styled(AnimateNumber)`
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: ${({theme}: {theme: Theme}) => theme.colors.primaryText};
`;
