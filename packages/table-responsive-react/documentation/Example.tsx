import React from "react";
import { TableResponsive } from "../src/TableResponsive";

const columns = ["Ingredienser", "Pris"];
const rows = [
    ["Melk", "12 kr"],
    ["Egg", "49 kr"],
    ["Sukker", "100 kr"],
];

const Example = () => {
    return <TableResponsive columns={columns} rows={rows} className={"helloworld"} />;
};

export default Example;
