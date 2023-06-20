import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";
import { cx } from "cva";

interface Props {
  children: ReactNode;
  href: string;
}
const ExtLink = ({ children, href }: Props) => (
  <sup>
    <a
      className="mr-0.5 box-border inline-block rounded-md border
        border-slate-200 bg-slate-50 px-1 py-0.5 align-middle
        font-semibold text-slate-900 hover:bg-blue-200 hover:underline"
      style={{ fontVariantCaps: "all-small-caps" }}
      href={href}
    >
      <span className="mr-1 inline-block align-middle text-slate-600">
        <ExternalLink size={12} />
      </span>
      {children}
    </a>
  </sup>
);

export default ExtLink;
