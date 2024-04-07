import React, { useEffect, useState, useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { PiXSquareThin } from "react-icons/pi";
import { BsBagCheck } from "react-icons/bs";
import "./Table.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import "./Users.css";
import { ToastContainer, toast } from "react-toastify";

const Messages = () => {
    const [data, setData] = useState([]);
    const user = localStorage.getItem("login-details");
    const getUsers = () => {
      axios("http://127.0.0.1:8000/api/all-messages", {
        headers: {
          Authorization: `Bearer ${JSON.parse(user).data.token}`,
        },
      }).then((resp) => {
        setData(resp.data.data);
      });
    };
    useEffect(() => {
      getUsers();
    }, []);
  
    const column = [
      { Header: "Name", accessor: "posted_by" },
      { Header: "Message", accessor: "message" },
      { Header: "Date", accessor: "created_at", Cell:(value)=>{
        return <span>
            {new Date(value.row.values.created_at).toLocaleDateString()} {''}
            {new Date(value.row.values.created_at).toLocaleTimeString()}

        </span>
      } },
    ];
    const columns = useMemo(() => column, []);
  
    const tableInstance = useTable(
      {
        columns: columns,
        data: data,
      },
      useGlobalFilter,
      useSortBy,
      usePagination
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      page,
      prepareRow,
      headerGroups,
      state,
      setGlobalFilter,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      gotoPage,
      pageCount,
    } = tableInstance;
    const { globalFilter, pageIndex } = state;
  
    return (
      <div>
        <div className="d-sm-flex justify-content-between align-items-center my-3">
          <form className="my-2 w-50">
            <input
              type="text"
              name="search"
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search anything"
              className="p-2 rounded-4 w-100"
              style={{ backgroundColor: "#ddd", border: "none", outline: "none" }}
            />
          </form>
        </div>
        <div className="table-responsive">
          <table {...getTableProps()} id="customers" className="table">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  <th>S/N</th>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {data.length ? (
              <tbody {...getTableBodyProps()}>
                {page.map((row, index) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      <td>{index + 1}</td>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody> No data entry yet</tbody>
            )}
          </table>
          <div className="d-flex justify-content-center gap-3 mt-2 align-items-center">
            <span>
              page {""}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <button
              onClick={() => gotoPage(0)}
              className="btn btn-sm"
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>
            <button disabled={!canPreviousPage} className="btn btn-sm">
              {" "}
              <FaAngleLeft onClick={() => previousPage()} />{" "}
            </button>
            <button disabled={!canNextPage} className="btn btn-sm">
              <FaAngleRight onClick={() => nextPage()} />
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              className="btn btn-sm"
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  };
  

export default Messages
