import Stat from "~/components/Stat";
import Card from "~/components/Card";
const DNDChar = () => (
  <Card>
    <div className="flex flex-wrap gap-y-2 p-1">
      <div className="flex">
        <Stat stat="CON" value={16} />
        <Stat stat="STR" value={8} />
        <Stat stat="DEX" value={10} />
      </div>
      <div className="flex">
        <Stat stat="INT" value={18} />
        <Stat stat="WIS" value={3} />
        <Stat stat="CHA" value={4} />
      </div>
    </div>
    <div className=" max-w-20 flex items-center justify-center">
      <div className=" p-1 font-mono"> LVL 1 </div>
      <div className="h-1 w-auto flex-1 bg-slate-200">
        <div className="h-1  bg-black" style={{ width: "45%" }}></div>
      </div>
    </div>
  </Card>
);
export default DNDChar;
