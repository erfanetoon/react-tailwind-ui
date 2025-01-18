import { TSizes } from "~types/global";

const SwitchSizes: Record<TSizes, Record<string, string>> = {
    xs: {
        input: "w-6 h-3",
        circle: "bg-white w-4 h-4 border rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full cursor-pointer before:content[''] before:block before:w-8 before:h-8 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4",
        circleBorder:
            "inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full",
    },
    sm: {
        input: "w-7 h-3.5",
        circle: "bg-white w-[1.125rem] h-[1.125rem] border rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full cursor-pointer before:content[''] before:block before:w-9 before:h-9 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4",
        circleBorder:
            "inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full",
    },
    md: {
        input: "w-8 h-4",
        circle: "bg-white w-5 h-5 border rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full cursor-pointer before:content[''] before:block before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4",
        circleBorder:
            "inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full",
    },
    lg: {
        input: "w-9 h-[1.125rem]",
        circle: "bg-white w-[1.375rem] h-[1.375rem] border rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full cursor-pointer before:content[''] before:block before:w-11 before:h-11 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4",
        circleBorder:
            "inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full",
    },
    xl: {
        input: "w-10 h-5",
        circle: "bg-white w-6 h-6 border rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full cursor-pointer before:content[''] before:block before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4",
        circleBorder:
            "inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full",
    },
    "2xl": {
        input: "w-12 h-6",
        circle: "bg-white w-7 h-7 border rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full cursor-pointer before:content[''] before:block before:w-14 before:h-14 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4",
        circleBorder:
            "inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full",
    },
};

export default SwitchSizes;
