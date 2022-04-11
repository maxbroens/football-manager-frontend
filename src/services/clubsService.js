import ClubsService from "./clubs.service";

const KEYS = {
  clubs: "clubs",
};

export async function getAllClubs() {

  if (localStorage.getItem(KEYS.clubs) == null) {
    const result = await ClubsService.getAllClubs();
    localStorage.setItem(KEYS.clubs, JSON.stringify(result.data));
    return result.data;

  } else {
    return JSON.parse(localStorage.getItem(KEYS.clubs));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllClubs,
};