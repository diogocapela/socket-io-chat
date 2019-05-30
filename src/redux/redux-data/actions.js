/* eslint-disable import/prefer-default-export */
import dataAPI from '@api/data';
import * as actionTypes from './actionTypes';

export const loadData = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOAD_DATA_REQUEST,
  });

  try {
    dispatch({
      type: actionTypes.LOAD_DATA_SUCCESS,
      payload: dataAPI,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_DATA_ERROR,
      payload: error,
    });
  }
};
