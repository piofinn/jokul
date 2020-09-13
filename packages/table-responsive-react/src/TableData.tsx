import React from "react";

interface Props {
    data: string;
}

export function TableData({ data }: Props) {
    return <td className="jkl-table-data">{data}</td>;
}
