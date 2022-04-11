import {FETCH_TEAM_FAIL, FETCH_TEAM_SUCCESS, TEAM_UPDATE} from "./types";

import TeamService from "../services/team.service";

export const fetchTeam = () => (dispatch) => {
  return TeamService.getTeam().then(
      (result) => {
        dispatch({
          type: FETCH_TEAM_SUCCESS,
          payload: {team: result.data},
        });

        return Promise.resolve();
      },
      () => {
        dispatch({
          type: FETCH_TEAM_FAIL,
        });

        return Promise.reject();
      }
  );
};

export const updateTeam = (team) => (dispatch) => {

  dispatch({
    type: TEAM_UPDATE,
    payload: {team: team},
  });
};