import { cva, cx, VariantProps } from "cva";

export type StatT = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

export const getStatColor = cva("", {
  variants: {
    stat: {
      STR: "bg-red-600",
      DEX: "bg-blue-600",
      CON: "bg-green-600",
      INT: "bg-amber-600",
      WIS: "bg-indigo-600",
      CHA: "bg-fuchsia-600",
    },
  },
});

export const getStatColorFaded = cva("", {
  variants: {
    stat: {
      STR: "bg-red-100",
      DEX: "bg-blue-100",
      CON: "bg-green-100",
      INT: "bg-amber-100",
      WIS: "bg-indigo-100",
      CHA: "bg-fuchsia-100",
    },
  },
});

export const getStatColorLabel = cva("", {
  variants: {
    stat: {
      STR: "bg-red-500",
      DEX: "bg-blue-500",
      CON: "bg-green-500",
      INT: "bg-amber-500",
      WIS: "bg-indigo-500",
      CHA: "bg-fuchsia-500",
    },
  },
});

const valueToVisibilityArray = (value: number) => {
  switch (value) {
    case 3:
      return [false, false, false, false, false, false, true];
    case 4:
    case 5:
      return [false, false, false, false, false, true, true];
    case 6:
    case 7:
    case 8:
      return [false, false, false, false, true, true, true];
    case 9:
    case 10:
    case 11:
    case 12:
      return [false, false, false, true, true, true, true];
    case 13:
    case 14:
    case 15:
      return [false, false, true, true, true, true, true];
    case 16:
    case 17:
      return [false, true, true, true, true, true, true];
    case 18:
      return [true, true, true, true, true, true, true];
    default:
      return [true, true, true, false, true, true, true];
  }
};

interface MyProps extends VariantProps<typeof getStatColor> {
  stat: StatT;
  value: number;
}

const Stat = ({ stat, value }: MyProps) => {
  const clr = getStatColor({ stat });
  const fadedclr = getStatColorFaded({ stat });
  const labelclr = getStatColorLabel({ stat });
  const show = valueToVisibilityArray(value);
  return (
    <div className="mr-2 flex flex-row">
      <div className="flex flex-col items-center  font-mono ">
        <div
          className={cx(
            "flex w-4 flex-1 flex-grow justify-center font-bold text-white",
            "bg-black"
          )}
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(-180deg)", // Write up the page, not down
            lineHeight: "18px", // overrides text-xs, necessary to fix vertical text baseline
            fontSize: "12px",
          }}
        >
          {stat}
        </div>
        <div
          className={cx(
            "flex-0 mt-1 box-border h-5 w-5 text-center text-sm font-bold text-white ",
            clr
          )}
          style={{ lineHeight: "22px" }}
        >
          {value}
        </div>
      </div>
      <div className="ml-1 mr-1 flex-1">
        <div className={cx("mb-1 h-1 w-5", show[0] ? clr : fadedclr)} />
        <div className={cx("mb-1  h-1 w-5", show[1] ? clr : fadedclr)} />
        <div className={cx("mb-1 h-1 w-5", show[2] ? clr : fadedclr)} />
        <div
          className={cx(
            "my-1 h-1.5 w-5 border",
            show[3] ? clr + " border-black" : fadedclr
          )}
        />
        <div className={cx("mt-1 h-1 w-5", show[4] ? clr : fadedclr)} />
        <div className={cx("mt-1  h-1 w-5", show[5] ? clr : fadedclr)} />
        <div className={cx("mt-1  h-1 w-5", show[6] ? clr : fadedclr)} />
      </div>
    </div>
  );
};
export default Stat;
