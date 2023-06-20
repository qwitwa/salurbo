import CollapsibleCard from "~/components/CollapsibleCard";
import ExtLink from "~/components/ExtLink";
import { CON, STR, DEX, INT, WIS, CHA } from "~/components/StatPills";

const Rules = () => (
  <>
    <CollapsibleCard heading="Character Creation">
      <p>Stat generation works identically to LotFP</p>
      <p>
        The point of departure is we use a modified Grit/Flesh
        <ExtLink href="https://lastgaspgrimoire.com/2013/04/13/id-hit-that/">
          LGG
        </ExtLink>
        <ExtLink href="https://www.youtube.com/watch?v=Qju_l8XlzAs">QB</ExtLink>
        mechanic which ties in to exhaustion.
      </p>
    </CollapsibleCard>
    <CollapsibleCard heading="Inventory Slots and Exhaustion">
      You gain <CON>5</CON>, <STR>4</STR>, <DEX>3</DEX>, <INT>2</INT>,{" "}
      <WIS>1</WIS>, and <CHA>0</CHA> inventory slots modified by <CON />,{" "}
      <STR />, <DEX />, <INT />, <WIS />, <CHA /> respectively. It's possible to
      gain negative inventory slots when adding all of these up.
    </CollapsibleCard>
  </>
);
export default Rules;
