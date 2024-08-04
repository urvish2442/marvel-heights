"use client";
import React from "react";
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    usePagination,
} from "react-table";
import { Table, InputGroup, FormControl, Form } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import "@/styles/globals.css";

const ContactTable = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter },
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 20 }, // Set default page size to 20
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const renderCell = (cell) => {
        if (cell.column.id === "contact_no") {
            // Adjust this condition based on your column id
            return (
                <a href={`tel:${cell.value}`} className="text-center">
                    {cell.value}
                </a>
            );
        }
        return cell.render("Cell");
    };

    return (
        <>
            <div className="d-flex justify-content-end align-items-center col-12 mt-5 mb-2">
                <div className="mb-3 col-8 col-sm-4 d-flex justify-content-end align-items-center">
                    <InputGroup className="px-3 px-sm-0">
                        <FormControl
                            placeholder="Search"
                            value={globalFilter || ""}
                            onChange={(e) =>
                                setGlobalFilter(e.target.value || undefined)
                            }
                        />
                    </InputGroup>
                </div>

                <div className="col-4 col-sm-1 d-flex w-full justify-content-center align-items-center mb-3">
                    <Form.Select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                        className="w-100 mx-1"
                    >
                        {[20, 50, 110].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </Form.Select>
                </div>
            </div>

            <Table {...getTableProps()} striped hover>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                    className="text-center fw-normal text-secondary"
                                >
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? " 🔽"
                                                : " 🔼"
                                            : ""}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        const isRental = row.original.is_rental == "1";
                        return (
                            <tr
                                {...row.getRowProps()}
                                style={
                                    isRental
                                        ? { backgroundColor: "#ff0000" }
                                        : {}
                                }
                                className={isRental ? "rental" : ""}
                            >
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="text-center fw-semibold"
                                    >
                                        {renderCell(cell)}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div className="pagination w-100 d-flex justify-content-between align-items-center">
                <span>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </span>
                <div className="d-flex">
                    <Button
                        className="m-2 fw-semibold"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {"<<"}
                    </Button>
                    <Button
                        className="m-2 fw-semibold"
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        {"Previous"}
                    </Button>
                    <Button
                        className="m-2 fw-semibold"
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    >
                        {"Next"}
                    </Button>
                    <Button
                        className="m-2 fw-semibold"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {">>"}
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ContactTable;
