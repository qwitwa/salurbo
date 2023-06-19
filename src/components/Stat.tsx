import { cva, cx, VariantProps } from "cva";

type StatT = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

const get_clr = cva("", {
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

const get_border = cva("", {
  variants: {
    stat: {
      STR: "border-red-600",
      DEX: "border-blue-600",
      CON: "border-green-600",
      INT: "border-amber-600",
      WIS: "border-indigo-600",
      CHA: "border-fuchsia-600",
    },
  },
});

const valueToVisibilityArray = (value: number) => {
  const no = "invisible";
  const yes = "";
  switch (value) {
    case 3:
      return [no, no, no, yes, yes, yes];
    case 4:
    case 5:
      return [no, no, no, yes, yes, no];
    case 6:
    case 7:
    case 8:
      return [no, no, no, yes, no, no];
    case 9:
    case 10:
    case 11:
    case 12:
      return [no, no, no, no, no, no];
    case 13:
    case 14:
    case 15:
      return [no, no, yes, no, no, no];
    case 16:
    case 17:
      return [no, yes, yes, no, no, no];
    case 18:
      return [yes, yes, yes, no, no, no];
    default:
      return [yes, yes, yes, yes, yes, yes];
  }
};

interface MyProps extends VariantProps<typeof get_clr> {
  stat: StatT;
  value: number;
}

const Stat = ({ stat, value }: MyProps) => {
  const clr = get_clr({ stat: stat });
  const show = valueToVisibilityArray(value);
  const border = get_border({ stat: stat });
  return (
    <div className="mx-1 flex-1">
      <div className={cx("my-0.5 h-0.5 w-8", clr, show[0])} />
      <div className={cx("my-0.5 h-0.5 w-8", clr, show[1])} />
      <div className={cx("my-0.5 h-0.5 w-8", clr, show[2])} />
      <div className="box-border min-w-[3.5rem] p-0 font-mono">
        <span
          className={cx(
            "my-0 inline-block w-8 py-0 text-center font-bold text-white",
            clr,
            border
          )}
        >
          {stat}
        </span>
        <span className="box-border inline-block w-6 bg-slate-200 text-center">
          {value}
        </span>
      </div>
      <div className={cx("my-0.5 h-0.5 w-8", clr, show[3])} />
      <div className={cx("my-0.5 h-0.5 w-8", clr, show[4])} />
      <div className={cx("my-0.5 h-0.5 w-8", clr, show[5])} />
    </div>
  );
};
export default Stat;
