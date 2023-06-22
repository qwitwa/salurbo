import { cva, cx, VariantProps } from "cva";

export type StatT = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

export const getStatColor = cva("", {
  variants: {
    stat: {
      STR: "bg-red-600 ",
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
      STR: "bg-red-50",
      DEX: "bg-blue-50",
      CON: "bg-green-50",
      INT: "bg-amber-50",
      WIS: "bg-indigo-50",
      CHA: "bg-fuchsia-50",
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

export const getStatGradientTo = cva("", {
  variants: {
    stat: {
      STR: "to-red-600",
      DEX: "to-blue-600",
      CON: "to-green-600",
      INT: "to-amber-600",
      WIS: "to-indigo-600",
      CHA: "to-fuchsia-600",
    },
  },
});

export const getStatGradientFrom = cva("", {
  variants: {
    stat: {
      STR: "from-red-700",
      DEX: "from-blue-700",
      CON: "from-green-700",
      INT: "from-amber-700",
      WIS: "from-indigo-700",
      CHA: "from-fuchsia-700",
    },
  },
});

export const getStatGradientVia = cva("", {
  variants: {
    stat: {
      STR: "via-red-700",
      DEX: "via-blue-700",
      CON: "via-green-700",
      INT: "via-amber-700",
      WIS: "via-indigo-700",
      CHA: "via-fuchsia-700",
    },
  },
});

const valueToVisibilityArray = (value: number) => {
  switch (value) {
    case 3:
      return [false, false, false, false, true, true, true];
    case 4:
    case 5:
      return [false, false, false, false, true, true, false];
    case 6:
    case 7:
    case 8:
      return [false, false, false, false, true, false, false];
    case 9:
    case 10:
    case 11:
    case 12:
      return [false, false, false, true, false, false, false];
    case 13:
    case 14:
    case 15:
      return [false, false, true, false, false, false, false];
    case 16:
    case 17:
      return [false, true, true, false, false, false, false];
    case 18:
      return [true, true, true, false, false, false, false];
    default:
      return [true, false, false, true, false, false, true];
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
  const to = getStatGradientTo({ stat });
  const from = getStatGradientFrom({ stat });
  const via = getStatGradientVia({ stat });
  const show = valueToVisibilityArray(value);
  return (
    <div className="mr-2 flex flex-row">
      <div className="flex flex-col items-center  font-mono ">
        <div
          className={cx(
            "flex w-4 flex-1 flex-grow justify-center font-bold text-white",
            "bg-zinc-800"
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
            " bg-gradient-to-tr from-10% shadow-md ",
            via,
            to,
            from
          )}
          style={{ lineHeight: "22px" }}
        >
          {value}
        </div>
      </div>
      <div className="ml-1 mr-1 flex-1">
        <div
          className={cx(
            "mb-1 h-1 w-5",
            show[0] ? clr + " border-b border-black" : fadedclr
          )}
          style={{
            borderRadius: "1rem 1rem 0 0",
          }}
        />
        <div
          className={cx(
            "mb-1  h-1 w-5",
            show[1] ? clr + " border-b border-black" : fadedclr
          )}
          style={{ borderRadius: "1rem 1rem 0 0" }}
        />
        <div
          className={cx(
            "mb-1 h-1 w-5",
            show[2] ? clr + " border-b border-black" : fadedclr
          )}
          style={{ borderRadius: "1rem 1rem 0 0" }}
        />
        <div
          className={cx(
            "mx-auto my-1 h-2 w-2 rounded-full",
            show[3] ? "bg-neutral-700" : "bg-neutral-50"
          )}
        />
        <div
          className={cx(
            "mt-1 h-1 w-5",
            show[4] ? clr + " border-t border-black" : fadedclr
          )}
          style={{ borderRadius: "0 0 1rem 1rem" }}
        />
        <div
          className={cx(
            "mt-1  h-1 w-5",
            show[5] ? clr + " border-t border-black" : fadedclr
          )}
          style={{ borderRadius: "0 0 1rem 1rem" }}
        />
        <div
          className={cx(
            "mt-1  h-1 w-5",
            show[6] ? clr + " border-t border-black" : fadedclr
          )}
          style={{ borderRadius: "0 0 1rem 1rem" }}
        />
      </div>
    </div>
  );
};
export default Stat;
