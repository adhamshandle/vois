import { all, call, put, takeEvery } from "typed-redux-saga";
import { GET_GENERIC, GET_GENERIC_SUCCESS, GET_GENERIC_SINGLE } from '../actions/actionTypes';
import axios from 'axios'
import config from "./config";
//get request for all data
const genericGetApi = async (type) => {
    return await axios.get(config.url + type)
        .then((response) => {
            return response.data;
        });
}
//get single object generic
const genericGetSingleApi = async (type, id) => {
    return await axios.get(config.url + type, { params: { id: id } })
        .then((response) => {
            return response.data;
        });
}
//retrieve data when the action is success
function* genericGet(action) {
    let type = action.payload.type;
    try {
        const fetchedData = yield* call(genericGetApi,type);
        yield put({ type: GET_GENERIC_SUCCESS, payload: { [type]: fetchedData, type: type } });
    } catch (error) {
        console.log(error);
    }
}
//retrieve single data when the action is success
function* genericGetSingle(action) {
    let type = action.payload.type;
    let id = action.payload.id;
    try {
        const fetchedData = yield* call(genericGetSingleApi, type, id);
        yield put({ type: GET_GENERIC_SUCCESS, payload: { [type]: fetchedData, type: type } });
    } catch (error) {
        console.log(error);
    }
}


export default function* rootSaga() {
    //call functions in order
    yield all([
        yield* takeEvery(GET_GENERIC, genericGet),
        yield* takeEvery(GET_GENERIC_SINGLE, genericGetSingle)
    ]);
}