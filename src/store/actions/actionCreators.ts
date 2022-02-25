import { GET_GENERIC, GET_GENERIC_SINGLE } from "./actionTypes";
//generic methods to get any data based on the path
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