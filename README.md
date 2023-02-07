<h1 align="center">Tailwind Ui Components</h1>

</br>

<p align="center">
  <!-- <a href="https://www.npmjs.com/package/@erfanetoon/react-tailwind-ui">
    <img src="https://img.shields.io/npm/dt/@erfanetoon/react-tailwind-ui.svg" alt="Total Downloads">
  </a> -->
  <a href="https://github.com/erfanetoon/react-tailwind-ui/releases">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version" />
  </a>
</p>

### Getting Started

react-tailwind-ui is working with Tailwind CSS classes and you need to have Tailwind CSS installed on your project - <a href="https://tailwindcss.com/docs/installation/framework-guides" target="_blank">Tailwind CSS Installation.</a>

<br />

1. Intall `@erfanetoon/react-tailwind-ui`.

```bash
npm i @erfanetoon/react-tailwind-ui
```

<br />

2. Once you install @erfanetoon/react-tailwind-ui you need to wrap your tailwind css configurations with the `withTailwind()` function coming from @erfanetoon/react-tailwind-ui.

```js
const withTailwind = require("@erfanetoon/react-tailwind-ui/withTailwind");

module.exports = withTailwind({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
});
```

<br />

3. @erfanetoon/react-tailwind-ui comes with a theme provider that set's the default theme/styles for components or to provide your own theme/styles to your components. You need to wrap your entire application with the `ThemeProvider` coming from @erfanetoon/react-tailwind-ui.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@erfanetoon/react-tailwind-ui";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ThemeProvider global={{}}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
```

<br />

4. Congratulations 🥳, you did it, now you're ready to use @erfanetoon/react-tailwind-ui.

```jsx
import { Button } from "@erfanetoon/react-tailwind-ui";

export default function Example() {
    return <Button>Button</Button>;
}
```

```jsx
import { IconButton } from "@erfanetoon/react-tailwind-ui";

export default function Example() {
    return <IconButton>IconButton</IconButton>;
}
```

```jsx
import { Chip } from "@erfanetoon/react-tailwind-ui";

export default function Example() {
    return <Chip>Chip</Chip>;
}
```

<br />

## Colors

Our color palette is same as tailwindcss - <a href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Tailwind CSS Colors.</a>, we use `blue` as our default color in all component, you can change it in themeProvider global object

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@erfanetoon/react-tailwind-ui";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ThemeProvider
            global={{
                color: "red",
            }}
        >
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
```

<br />

## Breakpoints

We add new breakpoint size as `xs`, this will help you to handle responsive design better

```jsx
xs: "480px",
sm: "640px",
md: "768px",
lg: "1024px",
xl: "1280px",
"2xl": "1536px",
```

You can override screens in `tailwind.config.js`

```jsx
theme: {
    screens: {
      // your values
    },
},
```

<br />

## Font Sizes

We define new font size values

```jsx
xs: ["0.625rem", "0.75rem"],
sm: ["0.75rem", "1rem"],
base: ["0.875rem", "1.25rem"],
lg: ["1rem", "1.5rem"],
xl: ["1.125rem", "1.75rem"],
"2xl": ["1.25rem", "1.75rem"],
"3xl": ["1.5rem", "2rem"],
"4xl": ["1.875rem", "2.25rem"],
"5xl": ["2.25rem", "2.5rem"],
"6xl": ["3rem", "1rem"],
"7xl": ["3.75rem", "1rem"],
"8xl": ["4.5rem", "1rem"],
"9xl": ["6rem", "1rem"],
"10xl": ["8rem", "1rem"],
```

You can override fontSize in `tailwind.config.js`

```jsx
theme: {
    fontSize: {
      // your values
    },
},
```

<br />

## Box Shadows

We define new box shadow values

```jsx
sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
"2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
none: "0 0 rgb(0, 0 / 0, 0)",
```

You can override boxShadow in `tailwind.config.js`

```jsx
theme: {
    boxShadow: {
      // your values
    },
},
```
