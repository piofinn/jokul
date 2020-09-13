import React, { MouseEvent } from "react";
import { TableData } from "./TableData";

interface Props {
    row: string[];
}

export function TableRow({ row }: Props) {
    let componentClassName = "jkl-table-row";
    let title: string | undefined = undefined;
    let onClick: undefined | ((evt: MouseEvent<HTMLTableRowElement>) => void) = undefined;

    return (
        <tr title={title} className={componentClassName} onClick={onClick}>
            {row.map((data, j) => (
                <TableData data={data} key={j} />
            ))}
        </tr>
    );
}
