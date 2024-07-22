import axios from 'axios';
import {
  FilterValues,
  Property,
  RapidApiPropertyOperation,
  RapidApiPropertiesOperation,
} from './types';

const apiClient = axios.create({
  baseURL: 'https://realty-in-us.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
  },
});

async function rapidApiRequest<T>(
  endpoint: string,
  method: 'POST' | 'GET',
  body?: object
): Promise<{ data: T } | never> {
  const response = await apiClient({
    url: endpoint,
    method: method,
    data: method === 'POST' ? body : undefined,
    params: method === 'GET' ? body : undefined,
  });

  if (response.data.errors) {
    throw response.data.errors[0];
  }
  return { data: response.data };
}

export const getProperty = async (
  property_id: string
): Promise<Property | never> => {
  const params = {
    property_id: property_id,
  };
  const response = await rapidApiRequest<RapidApiPropertyOperation>(
    '/properties/v3/detail',
    'GET',
    params
  );
  return response.data.data.home;
};

export const getProperties = async (
  page: number = 1,
  limit: number = 10,
  filterValues: FilterValues
): Promise<Property[] | never> => {
  const body = {
    offset: (page - 1) * 10,
    limit: limit,
    ...filterValues,
  };

  const response = await rapidApiRequest<RapidApiPropertiesOperation>(
    '/properties/v3/list',
    'POST',
    body
  );
  return response.data.data.home_search.results;
};
