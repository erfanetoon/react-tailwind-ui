import React from "react";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import { DefaultValue } from "./settings";
import { TThemeAction, IThemeContext } from "./types";
import deepmerge from "deepmerge";

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

    const handleChange: TThemeAction = (newData) => {
        setData(deepmerge(data, newData));
    };

    return (
        <Context.Provider value={{ ...data, handleChange }}>
            <section
                {...(data.global?.direction !== null ||
                data.global?.direction !== undefined
                    ? {
                          dir: data.global?.direction,
                          className: data.global?.direction,
                      }
                    : {})}
            >
                {children}
            </section>
        </Context.Provider>
    );
};

export const useTheme = () => useContext(Context);
