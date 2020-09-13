import React from "react";
import { TableRow } from "./TableRow";

type T = string[];

interface Props {
    columns: string[];
    rows: Array<T>;
    className?: string;
}

export function TableResponsive({ columns, rows, className }: Props) {
    return (
        <table className={`table ${className ? className : ""}`}>
            <thead>
                <tr className="table-row">
                    {columns.map((columnValue, i) => (
                        <th className="table-heading" key={i}>
                            {columnValue}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <TableRow row={row} key={i} />
                ))}
            </tbody>
        </table>
    );
}
