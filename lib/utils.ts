import { ReadonlyURLSearchParams } from 'next/navigation';
import { ZodIssue } from 'zod';
import { ValidationError } from './types';

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

export const format_text = (text: string) => {
  return toTitleCase(text?.replaceAll('_', ' ').replaceAll('-', ' '));
};

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const transformErrors = (errors: ZodIssue[]): ValidationError => {
  const transformedErrors: ValidationError = {};

  errors.forEach((error) => {
    const key = error.path[0];
    if (!transformedErrors[key]) {
      transformedErrors[key] = { message: error.message };
    }
  });

  return transformedErrors;
};

export const extractFilterValues = (
  searchParams: URLSearchParams,
  filters: string[]
) => {
  let filterValues: { [key: string]: string } = {};

  filters.forEach((filter) => {
    const value = searchParams.get(filter);
    if (value) {
      filterValues[filter] = value;
    }
  });

  if (!Object.keys(filterValues).length) {
    filterValues = { status: 'for_sale' };
  }

  return filterValues;
};
