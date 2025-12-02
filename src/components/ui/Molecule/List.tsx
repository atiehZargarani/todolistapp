import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/Atom/item";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TodosList {
  title: string;
  subtitle: string;
  endContent1: ReactNode;
  endContent2: ReactNode;
  listAction: ReactNode;
}

export function ItemDemo({
  title,
  subtitle,
  endContent1,
  endContent2,
  listAction,
}: TodosList) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item
        variant="outline"
        className={cn(
          checked
            ? "bg-green-100 border-green-200"
            : "bg-gray-50 border-gray-100"
        )}
      >
        <input
          type="checkbox"
          className="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />

        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{subtitle}</ItemDescription>
        </ItemContent>

        <ItemActions>
          {endContent1}
          {endContent2}
          {listAction}
        </ItemActions>
      </Item>
    </div>
  );
}
