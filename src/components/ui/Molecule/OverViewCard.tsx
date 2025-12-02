import { cn } from "@/lib/utils";
import React from "react";

type CardKind = "success" | "error" | "warning" | "basic";

export interface CardItem {
  type: CardKind;
  title: string;
  value: string | number;
}

interface CardProps {
  data: CardItem[];
}

const bgColors: Record<CardKind, string> = {
  success: "bg-green-200",

  error: "bg-red-200",
  warning: "bg-yellow-200",
  basic: "bg-blue-200",
};

const textColors: Record<CardKind, string> = {
  success: "text-green-600",
  error: "text-red-600",
  warning: "text-yellow-600",
  basic: "text-blue-600",
};

const OverViewCard: React.FC<CardProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const bgClass = bgColors[item.type] ?? "bg-gray-200";
        const textClass = textColors[item.type] ?? "text-gray-700";

        return (
          <div
            key={item.title}
            className={cn(
              "w-full md:w-[250px] rounded-lg overflow-hidden shadow-sm flex flex-col",
              bgClass
            )}
          >
            <div className="px-6 py-4 flex flex-col justify-start">
              <div
                className={cn("text-xl mb-2 text-start font-bold", textClass)}
              >
                {item.title}
              </div>
              <span className="text-sm text-gray-800 text-start">
                {item.value}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OverViewCard;
