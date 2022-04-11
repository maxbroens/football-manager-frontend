import {FETCH_TEAM_FAIL, FETCH_TEAM_SUCCESS, TEAM_UPDATE} from "../actions/types";

const team = JSON.parse(localStorage.getItem("team"));

const initialState = team;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        team: payload.team,
      };
    case FETCH_TEAM_FAIL:
      return {
        ...state,
        team: null,
      };
    case TEAM_UPDATE:
      return {
        ...state,
        team: payload.team,
      };
    default:
      return state;
  }
}