import { ReactNode, useState } from "react";
import Card from "~/components/Card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

import { ChevronDown } from "lucide-react";

interface Props {
  children: ReactNode;
  heading: string;
}

const CollapsibleCard = ({ children, heading }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild className="rounded p-1 hover:bg-slate-200">
          <div className="flex flex-row items-center justify-between">
            <h1 className="my-1 inline-block text-2xl font-semibold">
              {heading}
            </h1>
            <ChevronDown className="m-2 h-9 w-9" />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-1">{children}</CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default CollapsibleCard;
