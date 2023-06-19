import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Card = ({ children }: Props) => (
  <div className="max-w-20 m-2 mb-0 bg-white p-1 shadow-md">{children}</div>
);

export default Card;
