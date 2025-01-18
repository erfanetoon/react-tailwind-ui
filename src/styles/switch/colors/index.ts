import { TColors } from "~types/global";

const SwitchColors: Record<TColors, Record<string, string>> = {
    primary: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-primary-500 peer-checked:before:bg-primary-500 checked:bg-primary-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-primary-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-primary-500 peer-checked:before:bg-primary-500",
    },
    secondary: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-secondary-500 peer-checked:before:bg-secondary-500 checked:bg-secondary-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-secondary-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-secondary-500 peer-checked:before:bg-secondary-500",
    },
    tertiary: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-tertiary-500 peer-checked:before:bg-tertiary-500 checked:bg-tertiary-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-tertiary-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-tertiary-500 peer-checked:before:bg-tertiary-500",
    },
    amber: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-amber-500 peer-checked:before:bg-amber-500 checked:bg-amber-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-amber-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-amber-500 peer-checked:before:bg-amber-500",
    },
    blue: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-blue-500 peer-checked:before:bg-blue-500 checked:bg-blue-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-blue-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-blue-500 peer-checked:before:bg-blue-500",
    },
    cyan: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-cyan-500 peer-checked:before:bg-cyan-500 checked:bg-cyan-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-cyan-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-cyan-500 peer-checked:before:bg-cyan-500",
    },
    emerald: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-emerald-500 peer-checked:before:bg-emerald-500 checked:bg-emerald-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-emerald-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-emerald-500 peer-checked:before:bg-emerald-500",
    },
    fuchsia: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-emerald-500 peer-checked:before:bg-emerald-500 checked:bg-emerald-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-emerald-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-emerald-500 peer-checked:before:bg-emerald-500",
    },
    gray: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-gray-500 peer-checked:before:bg-gray-500 checked:bg-gray-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-gray-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-gray-500 peer-checked:before:bg-gray-500",
    },
    green: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-green-500 peer-checked:before:bg-green-500 checked:bg-green-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-green-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-green-500 peer-checked:before:bg-green-500",
    },
    indigo: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-indigo-500 peer-checked:before:bg-indigo-500 checked:bg-indigo-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-indigo-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-indigo-500 peer-checked:before:bg-indigo-500",
    },
    lime: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-lime-500 peer-checked:before:bg-lime-500 checked:bg-lime-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-lime-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-lime-500 peer-checked:before:bg-lime-500",
    },
    neutral: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-neutral-500 peer-checked:before:bg-neutral-500 checked:bg-neutral-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-neutral-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-neutral-500 peer-checked:before:bg-neutral-500",
    },
    orange: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-orange-500 peer-checked:before:bg-orange-500 checked:bg-orange-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-orange-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-orange-500 peer-checked:before:bg-orange-500",
    },
    pink: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-pink-500 peer-checked:before:bg-pink-500 checked:bg-pink-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-pink-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-pink-500 peer-checked:before:bg-pink-500",
    },
    purple: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-purple-500 peer-checked:before:bg-purple-500 checked:bg-purple-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-purple-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-purple-500 peer-checked:before:bg-purple-500",
    },
    red: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-red-500 peer-checked:before:bg-red-500 checked:bg-red-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-red-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-red-500 peer-checked:before:bg-red-500",
    },
    rose: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-rose-500 peer-checked:before:bg-rose-500 checked:bg-rose-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-rose-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-rose-500 peer-checked:before:bg-rose-500",
    },
    sky: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-sky-500 peer-checked:before:bg-sky-500 checked:bg-sky-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-sky-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-sky-500 peer-checked:before:bg-sky-500",
    },
    slate: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-slate-500 peer-checked:before:bg-slate-500 checked:bg-slate-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-slate-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-slate-500 peer-checked:before:bg-slate-500",
    },
    stone: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-stone-500 peer-checked:before:bg-stone-500 checked:bg-stone-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-stone-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-stone-500 peer-checked:before:bg-stone-500",
    },
    teal: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-teal-500 peer-checked:before:bg-teal-500 checked:bg-teal-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-teal-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-teal-500 peer-checked:before:bg-teal-500",
    },
    violet: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-violet-500 peer-checked:before:bg-violet-500 checked:bg-violet-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-violet-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-violet-500 peer-checked:before:bg-violet-500",
    },
    yellow: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-yellow-500 peer-checked:before:bg-yellow-500 checked:bg-yellow-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-yellow-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-yellow-500 peer-checked:before:bg-yellow-500",
    },
    zinc: {
        background: "bg-gray-100",
        checked:
            "peer-checked:border-zinc-500 peer-checked:before:bg-zinc-500 checked:bg-zinc-500",
        circle: "border-gray-100",
        circleChecked:
            "before:bg-zinc-200 before:opacity-0 hover:before:opacity-10 peer-checked:border-zinc-500 peer-checked:before:bg-zinc-500",
    },
};

export default SwitchColors;
