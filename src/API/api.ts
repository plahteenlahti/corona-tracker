import {Response} from 'src/Types/Response';

export const API_URL =
  'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData';

export const dummyResponse: Response = {
  confirmed: [],
  deaths: [],
  recovered: [],
};
