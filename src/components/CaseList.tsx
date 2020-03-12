import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {API_URL, dummyResponse} from '../API/api';
import {SectionList} from 'react-native';
import {Response, RecoveredCase, ConfirmedCase} from '../Types/Response';
import SectionHeader from './CaseList/SectionHeader';
import InfectionRow from './CaseList/InfectionRow';
import {Theme} from 'src/Types/Theme';
import Counter from './Counter/Counter';
import DataSource from './DataSource';

const ActiveCases = () => {
  const [data, setData] = useState(dummyResponse);
  const [fetching, setFetching] = useState(false);
  const fetchData = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then((json: Response) => setData(json));
  };

  useEffect(() => {
    setFetching(true);
    fetch(API_URL)
      .then(response => response.json())
      .then((json: Response) => {
        setData(json);
        setFetching(false);
      });
  }, []);

  const renderSectionHeader = ({section}: any) => {
    console.log('section', section);
    return <SectionHeader title={section.title} count={section.data.length} />;
  };

  const renderItem = ({item, index}: {item: ConfirmedCase; index: number}) => {
    return (
      <InfectionRow
        key={index}
        date={item.date}
        healthCareDistrict={item.healthCareDistrict}
        countryCode={item.infectionSourceCountry}
      />
    );
  };

  const sections = [
    {
      title: 'Confirmed',
      data: data.confirmed,
    },
    {title: 'Deaths', data: data.deaths},
    {title: 'Recovered', data: data.recovered},
  ];

  const confirmed = data.confirmed.length;
  const deaths = data.deaths.length;
  const recovered = data.recovered.length;

  return (
    <Container>
      <SectionList
        refreshControl={
          <ThemedRefreshControl onRefresh={fetchData} refreshing={fetching} />
        }
        ListHeaderComponent={
          <>
            <Title>COVID-19 in Finland</Title>
            <Counter
              confirmed={confirmed}
              deaths={deaths}
              recovered={recovered}
            />
          </>
        }
        ListFooterComponent={<DataSource />}
        sections={sections}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default ActiveCases;

const Container = styled.View``;

const Title = styled.Text`
  margin: 20px;
  font-weight: bold;
  font-size: 36px;
  color: ${({theme}: {theme: Theme}) => theme.colors.primaryText};
`;

const ThemedRefreshControl = styled.RefreshControl``;
