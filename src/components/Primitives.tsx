import styled from 'styled-components/native';
import {Theme} from 'src/Types/Theme';

export const ThemedSafeAreaView = styled.SafeAreaView`
  background-color: ${({theme}: {theme: Theme}) => theme.colors.bg};
`;

export const ThemedStatusBar = styled.StatusBar.attrs(
  ({theme}: {theme: Theme}) => ({
    barStyle: theme.dark ? 'light-content' : 'dark-content',
  }),
)`
  background-color: ${({theme}: {theme: Theme}) => theme.colors.bg};
`;
