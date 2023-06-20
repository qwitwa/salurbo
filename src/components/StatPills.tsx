import { ReactElement, ReactNode } from "react";
import { getStatColor, StatT } from "./Stat";
import { cx } from "cva";

interface Props {
  children?: ReactNode;
}

const StatCompFactory = (stat: StatT) => {
  const statColor = getStatColor({ stat });
  const component = ({ children }: Props) => (
    <span
      className={cx("text-bold rounded p-0.5 font-mono text-white", statColor)}
    >
      {children || stat}
    </span>
  );
  return component;
};

const stats: readonly StatT[] = [
  "CON",
  "STR",
  "DEX",
  "INT",
  "WIS",
  "CHA",
] as const;

const res = stats.map(StatCompFactory) as readonly ((
  props: Props
) => JSX.Element)[];
const CON = res[0]!;
const STR = res[1]!;
const DEX = res[2]!;
const INT = res[3]!;
const WIS = res[4]!;
const CHA = res[5]!;
export { CON, STR, DEX, INT, WIS, CHA };
