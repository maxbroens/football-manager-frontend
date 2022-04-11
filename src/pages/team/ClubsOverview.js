import React, {useEffect, useState} from "react";
import useTable from "../../components/useTable";
import {makeStyles, Paper, TableBody, TableCell, TableRow,} from "@material-ui/core";
import ClubsService from "../../services/clubsService";
import {useSelector} from "react-redux";
import {history} from "../../helpers/history";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  {id: "id", label: "ID"},
  {id: "name", label: "Naam"},
];

export default function ClubsOverview() {
  const classes = useStyles();
  const [records, setRecords] = useState([]);
  const user = useSelector(state => state.auth.user);

  if (!user) {
    history.push("/");
    window.location.reload();
  }

  useEffect(() => {
    if (records.length === 0) {
      async function fetchClubs() {
        return ClubsService.getAllClubs();
      }

      fetchClubs().then((result) => {
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
        <Paper>
          <h3>
            <strong>{user.username}</strong> Profile
          </h3>
          <TblContainer>
            <TblHead/>
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </TblContainer>
          <TblPagination/>
        </Paper>
      </>
  );
}