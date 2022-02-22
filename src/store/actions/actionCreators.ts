import { GET_GENERIC, GET_GENERIC_SINGLE } from "./actionTypes";

export const getGeneric = (type: any) => {
  return {
    type: GET_GENERIC,
    payload: { type }
  };
};

export const getGenericSingle = (type: any, id: any) => {
  return {
    type: GET_GENERIC_SINGLE,
    payload: { type, id }
  };
};