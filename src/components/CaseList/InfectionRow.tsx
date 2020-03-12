import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';
import {Theme} from 'src/Types/Theme';

interface Props {
  date: string;
  healthCareDistrict: string;
  countryCode: string;
}

const InfectionRow = (props: Props) => {
  const {date, healthCareDistrict, countryCode} = props;
  return (
    <Container>
      <Date>{moment(date).format('HH:mm DD.MM.')}</Date>
      <District>{healthCareDistrict}</District>

      <Flag
        source={{uri: `https://www.countryflags.io/${countryCode}/flat/64.png`}}
      />
    </Container>
  );
};

export default InfectionRow;

const Container = styled.View`
  padding: 10px 20px;
  background-color: ${({theme}: {theme: Theme}) => theme.colors.bg};
`;

const Date = styled.Text`
  color: ${({theme}: {theme: Theme}) => theme.colors.primaryText};
`;

const District = styled.Text`
  color: ${({theme}: {theme: Theme}) => theme.colors.primaryText};
`;

const Flag = styled.Image`
  height: 50px;
  width: 50px;
`;
