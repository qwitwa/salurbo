import Stat from "~/components/Stat";
const DNDChar = () => (
  <div className="max-w-20 m-1 border border-black p-1">
    <div className="flex p-1">
      <Stat stat="STR" value={8} />
      <Stat stat="DEX" value={10} />
      <Stat stat="CON" value={16} />
      <Stat stat="INT" value={18} />
      <Stat stat="WIS" value={3} />
      <Stat stat="CHA" value={4} />
    </div>
    <div className=" max-w-20 flex items-center justify-center">
      <div className=" p-1 font-mono"> LVL 1 </div>
      <div className="h-1 w-auto flex-1 bg-slate-200">
        <div className="h-1  bg-black" style={{ width: "45%" }}></div>
      </div>
    </div>
  </div>
);
export default DNDChar;
