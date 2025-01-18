import React, { useEffect } from "react";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import deepmerge from "deepmerge";
import { DefaultValue } from "./settings";
import { TThemeAction, IThemeContext } from "./types";

interface Props {
    children: ReactNode;
}

const Context = createContext<IThemeContext & { handleChange: TThemeAction }>({
    ...DefaultValue,
    handleChange: () => {},
});

export const ThemeProvider: FC<Props & IThemeContext> = ({
    children,
    ...incomingData
}) => {
    const [data, setData] = useState(deepmerge(DefaultValue, incomingData));

    useEffect(() => {
        const elements = document.getElementsByTagName("body");

        if (!elements[0]) return;

        elements[0].setAttribute("dir", data.global?.direction);
        elements[0].setAttribute("class", data.global?.direction);
    }, [data.global?.direction]);

    const handleChange: TThemeAction = (newData) => {
        setData(deepmerge(data, newData));
    };

    return (
        <Context.Provider value={{ ...data, handleChange }}>
            {children}
        </Context.Provider>
    );
};

export const useTheme = () => useContext(Context);
