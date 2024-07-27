"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ContactTable from "@/components/homePage/ContactTable";

export default function Home() {
    const router = useRouter();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchCsv("/assets/csv/MarvelHeights.csv");
    }, []);

    const fetchCsv = async (filePath = "/assets/csv/MarvelHeights.csv") => {
        const response = await fetch(filePath);
        const csvText = await response.text();

        const rows = csvText.trim().split("\n");
        const headers = rows[0].split(",");

        const data = rows.slice(1).map((row) => {
            const values = row.split(",");
            return headers.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
        });
        setData(data);
    };

    //   {
    //     "wing": "A",
    //     "number": "101",
    //     "flat_no": "A-101",
    //     "name": "",
    //     "contact_no": "",
    //     "other_contact_no": ""
    // }
    const columns = [
        // {
        //     Header: "Wing",
        //     accessor: "wing",
        // },
        // {
        //     Header: "Number",
        //     accessor: "number",
        // },
        {
            Header: "Flat No.",
            accessor: "flat_no",
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Contact number",
            accessor: "contact_no",
        },
        {
            Header: "Other Contact number",
            accessor: "other_contact_no",
        },
        {
            Header: "Two Wheel 1",
            accessor: "two_wheel_1",
        },
        {
            Header: "Two Wheel 2",
            accessor: "two_wheel_2",
        },
        {
            Header: "Four Wheel",
            accessor: "four_wheel",
        },
    ];

    // const data = [
    //     { id: 1, name: "John Doexhgdfghdtfdtfghh", age: 28 },
    //     { id: 2, name: "Jane Smithfghdfghdfgd", age: 34 },
    //     // Add more data as needed
    // ];
    return (
        <main className={styles.main}>
            {/* <div className="d-flex w-100 border-primary border-1 flex-column justify-content-center align-items-center">
                <div className="card col-10 justify-content-center align-items-center m-2">
                    <h3 className="fw-bold">Marvel Heights Contact Details</h3>
                </div>
                <div className="card col-10 justify-content-center align-items-end mt-4">
                    search
                </div>
                <div className="card col-10 justify-content-center align-items-center m-2">
                    <ContactTable />
                </div>
            </div> */}
            <div className="d-flex w-100 border-primary border-1 flex-column justify-content-center align-items-center">
                <h1 className="fw-bold">
                    <u>Marvel Heights</u>
                </h1>
                <ContactTable columns={columns} data={data} />
            </div>
        </main>
    );
}
