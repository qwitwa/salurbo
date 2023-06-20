import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Card = ({ children }: Props) => (
  <div className="max-w-20 m-2 mb-0 border border-slate-200 bg-white p-1 shadow-lg">
    {children}
  </div>
);

export default Card;
