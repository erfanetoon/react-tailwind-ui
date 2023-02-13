import React from "react";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import { DefaultValue } from "./settings";
import { ThemeAction, ThemeContext } from "./types";
import deepmerge from "deepmerge";

interface Props {
    children: ReactNode;
}

const Context = createContext<ThemeContext & { handleChange: ThemeAction }>({
    ...DefaultValue,
    handleChange: () => {},
});

export const ThemeProvider: FC<Props & ThemeContext> = ({
    children,
    ...incomingData
}) => {
    const [data, setData] = useState(deepmerge(DefaultValue, incomingData));

    const handleChange: ThemeAction = (newData) => {
        setData({
            ...data,
            ...newData,
        });
    };

    return (
        <Context.Provider value={{ ...data, handleChange }}>
            <section
                dir={data.global?.direction}
                className={`${data.global?.direction}`}
            >
                {children}
            </section>
        </Context.Provider>
    );
};

export const useTheme = () => useContext(Context);
