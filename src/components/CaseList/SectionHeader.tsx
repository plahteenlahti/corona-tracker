import React from 'react';
import styled from 'styled-components/native';
import {Theme} from 'src/Types/Theme';

interface Props {
  title: string;
  count: number;
}

const SectionHeader = (props: Props) => {
  const {title, count} = props;
  return (
    <Header>
      <Title>{title}</Title>
      <Count>{count}</Count>
    </Header>
  );
};

export default SectionHeader;

const Header = styled.View`
  padding: 20px;
  background-color: ${({theme}: {theme: Theme}) => theme.colors.bg};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}: {theme: Theme}) => theme.colors.primaryText};
`;

const Count = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}: {theme: Theme}) => theme.colors.primaryText};
`;
