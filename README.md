<h1 align="center">Tailwind Ui Components</h1>

</br>

<p align="center">
  <!-- <a href="https://www.npmjs.com/package/@erfanetoon/react-tailwind-ui">
    <img src="https://img.shields.io/npm/dt/@erfanetoon/react-tailwind-ui.svg" alt="Total Downloads">
  </a> -->
  <a href="https://github.com/erfanetoon/react-tailwind-ui/releases">
    <img src="https://img.shields.io/badge/version-0.0.1-blue.svg" alt="Version" />
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
        <ThemeProvider>
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

<br />
