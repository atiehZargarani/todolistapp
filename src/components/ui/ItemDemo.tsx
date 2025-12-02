import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TodosList {
  title: string;
  subtitle: string;
  endContent1: ReactNode;
  endContent2: ReactNode;
  cardAction: ReactNode;
}

export function ItemDemo({
  title,
  subtitle,
  endContent1,
  endContent2,
  cardAction,
}: TodosList) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item
        variant="outline"
        className={cn(
          checked
            ? "bg-green-100 border-green-400"
            : "bg-white border-gray-300"
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />

        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{subtitle}</ItemDescription>
        </ItemContent>

        <ItemActions>
          {cardAction}
          {endContent1}
          {endContent2}
        </ItemActions>
      </Item>
    </div>
  );
}
