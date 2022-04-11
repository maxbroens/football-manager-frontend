import React, {useEffect, useState} from "react";
import useTable from "../../components/useTable";
import {makeStyles, Paper, TableBody, TableCell, TableRow,} from "@material-ui/core";
import {useSelector} from "react-redux";
import PlayersService from "../../services/playersService";
import {history} from "../../helpers/history";
import Button from "../../components/controls/Button";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    color: "#fff"
  },
}));

const headCells = [
  {id: "firstName", label: "Voornaam"},
  {id: "lastName", label: "Achternaam"},
  {id: "club", label: "Club"},
  {id: "add", label: ""},
];

export default function PlayersOverview() {
  const [records, setRecords] = useState([]);
  const user = useSelector(state => state.auth.user);

  let loading = false;

  if (!user) {
    history.push("/");
    window.location.reload();
  }

  useEffect(() => {
    if (records.length === 0) {
      async function fetchPlayers() {
        return PlayersService.getAllPlayers();
      }

      fetchPlayers().then((result) => {
        setRecords(result);
      });
    }
  }, [records])

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells);

  return (
      <>
        <Paper className="playersOverview">
          <div className="playersOverview">
            <div className="playersOverview-header">Spelersmarkt</div>
            <div className="playersOverview-players">
              <TblContainer>
                <TblHead/>
                <TableBody>
                  {recordsAfterPagingAndSorting().map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.firstName}</TableCell>
                        <TableCell>{item.lastName}</TableCell>
                        <TableCell>{item.club.name}</TableCell>
                        <TableCell>
                          <Button size="small" text="+" type="submit" disabled={loading}
                                  style={{
                                    backgroundColor: "#21b6ae",
                                    maxWidth: '24px',
                                    maxHeight: '24px',
                                    minWidth: '24px',
                                    minHeight: '24px'
                                  }}/>
                          {loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                          )}
                        </TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </TblContainer>
            </div>
            <TblPagination />
          </div>
        </Paper>
      </>
  )
      ;
}