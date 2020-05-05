import React from "react";
import breakpoints from "!!raw-loader!../variables/_breakpoints.scss";
import colors from "!!raw-loader!../variables/_colors.scss";
import fontSize from "!!raw-loader!../variables/_font-size.scss";
import shadow from "!!raw-loader!../variables/_shadow.scss";
import spacing from "!!raw-loader!../variables/_spacing.scss";
import zIndex from "!!raw-loader!../variables/_z-index.scss";

interface SassVariable {
    name: string;
    value: string;
}

enum LineType {
    Variable = "$",
    Comment = "//",
    Empty = "",
}

const sassyFiles = { breakpoints, colors, spacing };

const getVarName = (variable: string) => variable.split(":")[0].trim();
const getVarValue = (variable: string) => {
    try {
        return variable.split(":")[1].trim().replace(";", "");
    } catch (e) {
        return undefined;
    }
};

const findVariableValue = (variable: string, dict: string[], depth = 0): string | undefined => {
    if (!variable.startsWith(LineType.Variable)) {
        return undefined;
    }

    const variableValue = getVarValue(variable);

    if (variableValue) {
        if (!variableValue.startsWith(LineType.Variable)) {
            return variableValue;
        }

        for (const dVariable of dict) {
            if (!dVariable.startsWith(LineType.Variable)) {
                continue;
            }

            const dVarName = getVarName(dVariable);
            const dVarValue = getVarValue(dVariable);

            if (dVarValue && variableValue === dVarName) {
                if (dVarValue.startsWith(LineType.Variable)) {
                    return findVariableValue(dVarValue, dict, depth + 1);
                } else {
                    return dVarValue;
                }
            }
        }
    }

    return undefined;
};

// TODO Definition tag

export const Variables = () => {
    const sassyLines: string[] = sassyFiles.spacing.split("\n").map((line: string) => line.trim());
    const sassyDict = sassyLines.filter((line) => line.startsWith(LineType.Variable));
    const styles = [];

    let lastStyle = 0;

    sassyLines.forEach((val) => {
        if (val.startsWith(LineType.Variable)) {
            console.log(val, findVariableValue(val, sassyDict));
            const v = findVariableValue(val, sassyDict);

            if (v && styles[lastStyle]) {
                const meta = v.split(LineType.Comment)[1];
                styles[lastStyle].variables.push({
                    raw: val,
                    name: getVarName(val),
                    value: v,
                    meta: meta ? meta.trim() : null,
                });
            }
        } else if (val.startsWith(LineType.Comment)) {
            lastStyle = styles.length;
            styles[lastStyle] = {
                title: val,
                variables: [],
            };
        }
    });

    console.log(styles);

    return null;
};
