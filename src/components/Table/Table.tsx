import React, { useMemo } from "react";
import { UserDetail } from "../../types/types";
import { useTable, Column, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import "./table.scss";
import Vector from "../../assets/images/Vector.png";
import Filter from "../../assets/images/Filter.png";
import ForwardArrow from "../../assets/images/ForwardArrow.png";
import PreviousArrow from "../../assets/images/PreviousArrow.png";
import Eye from "../../assets/images/Eye.png";
import BadUserOutline from "../../assets/images/BadUserOutline.png";
import GoodUserOutline from "../../assets/images/GoodUserOutline.png";
import { Link } from "react-router-dom";
import { Popover, Menu } from "@headlessui/react";

type TableProps = {
  data: UserDetail[];
};

function Table(props: TableProps) {
  const columns = useMemo(() => COLUMNS as Column<UserDetail>[], []);
  const data = useMemo(() => props.data, [props.data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    state,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    <Popover className="popover">
                      <Popover.Button className="popover-button">
                        {column.render("Header")} <img src={Filter} alt="" />
                      </Popover.Button>
                      <Popover.Panel className="popover-panel">
                        <div className="popover-panel-container">
                          <form>
                            <div>
                              <label>Organization</label>
                              <select>
                                <option disabled selected>
                                  Select
                                </option>
                              </select>
                            </div>
                            <div>
                              <label>Username</label>
                              <input type="text" placeholder="User" />
                            </div>
                            <div>
                              <label>Email</label>
                              <input type="email" placeholder="Email" />
                            </div>
                            <div>
                              <label>Date</label>
                              <input type="date" placeholder="Date" />
                            </div>
                            <div>
                              <label>Phone Number</label>
                              <input type="tel" placeholder="Phone Number" />
                            </div>
                            <div>
                              <label>Status</label>
                              <select>
                                <option disabled selected>
                                  Select
                                </option>
                              </select>
                            </div>
                            <div className="popover-panel-buttons">
                              <button className="reset-button">Reset</button>
                              <button className="filter-button">Filter</button>
                            </div>
                          </form>
                        </div>
                      </Popover.Panel>
                    </Popover>
                  </th>
                ))}
                <th className="last-th"></th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    if (
                      cell.column.Header === "DATE JOINED" ||
                      cell.column.Header === "STATUS"
                    ) {
                      const formatedDate = new Date(
                        cell.value
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      });
                      return (
                        <td key={cell.value}>
                          <Link to={`/user/${cell.row.original.id}`}>
                            <span>{formatedDate}</span>
                          </Link>
                        </td>
                      );
                    }
                    return (
                      <td key={cell.value}>
                        <Link to={`/user/${cell.row.original.id}`}>
                          {cell.value}
                        </Link>
                      </td>
                    );
                  })}
                  <td className="last-td">
                    <Menu as="div" className="dropdown">
                      <Menu.Button className="dropdown-button">
                        <img src={Vector} alt="" />
                      </Menu.Button>
                      <Menu.Items className="dropdown-container">
                        <Menu.Item as="div" className="dropdown-item">
                          <img src={Eye} alt="" />
                          <span>View Details</span>
                        </Menu.Item>
                        <Menu.Item as="div" className="dropdown-item">
                          <img src={BadUserOutline} alt="" />
                          <span>Blacklist User</span>
                        </Menu.Item>
                        <Menu.Item as="div" className="dropdown-item">
                          <img src={GoodUserOutline} alt="" />
                          <span>Activate User</span>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="table-functions">
        <div className="page-size">
          <span>Showing </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 75, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span> out of 100</span>
        </div>
        <div className="pagination">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <img src={PreviousArrow} alt="" />
          </button>
          <span> {pageIndex + 1}</span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <img src={ForwardArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
