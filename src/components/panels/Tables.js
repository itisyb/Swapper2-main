import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import "./tables.css";
const columns = [
  { id: "name", label: "From", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "To",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Hash",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Amount",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size };
}

const rows = [
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "IN", 1324171354, 3287263),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "CN", 1403500365, 9596961),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "IT", 60483973, 301340),
  createData("aJKBDSJjkbajkBDSJKBDjiWA States", "US", 327167434, 9833520),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "CA", 37602103, 9984670),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "AU", 25475400, 7692024),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "DE", 83019200, 357578),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "JP", 126317000, 377973),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "RU", 146793744, 17098246),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "NG", 200962417, 923768),
  createData("aJKBDSJjkbajkBDSJKBDjiWA", "BR", 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowss, setrowss] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function createData2(from, to, hash, Amount) {
    return { from, to, hash, Amount };
  }
  useEffect(() => {
    if (props.walletAddress) {
      axios
        .get(
          `https://wdnz0gjvw3.execute-api.us-east-1.amazonaws.com/dev/` +
            props.walletAddress
        )
        .then(function (res) {
          if (res.data) {
            const tmp = [];
            if (res.data.transactions.length) {
              res.data.transactions.map((i, j) => {
                let vars = createData2(
                  i["fromNetwork"],
                  i["toNetwork"],
                  i["txhash"],
                  i["value"]
                );
                console.log(vars);
                tmp.push(vars);
              });
            }
            setrowss(tmp);
            console.log(rowss);
          }
        });
    }
  }, []);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Hash</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {rowss.map((i, c) => (
            <tr>
              <td> {i["from"]}</td>
              <td> {i["to"]}</td>
              <td className="md:hidden block">{i["hash"].slice(0, 15)}...</td>
              <td className="md:block hidden">{i["hash"]}</td>
              <td>{i["Amount"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {!props.walletAddress && (
        <div className="font-medium text-lg text-center my-8 text-gray-300">
          Login To Etherium Wallet
        </div>
      )}
      {!rowss.length && props.walletAddress && (
        <div className="font-medium text-lg text-center my-8 text-gray-300">
          No Transactions Made
        </div>
      )}
    </>

    // <table class="border-collapse w-full">
    //    <thead>
    //        <tr>
    //            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">From</th>
    //            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">To</th>
    //            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Hash</th>
    //            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Amount</th>
    //        </tr>
    //    </thead>
    //    <tbody>
    //
    //        <tr class="mt-10 md:mt-0 bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
    //            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
    //                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">From</span>
    //
    //            </td>
    //            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
    //                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">To</span>
    //
    //            </td>
    //            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
    //                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Hash</span>
    //                <br/><span className="">{i["hash"]}</span>
    //            </td>
    //            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
    //                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Amount</span>
    //                {i["Amount"]}
    //            </td>
    //        </tr>
    //))}
    //    </tbody>
    //</table>
  );
}
