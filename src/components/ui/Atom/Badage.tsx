import { cn } from "@/lib/utils";

export interface BadgeItem {
    title: string;
    type: string
    action?:()=>void
  }
  
 function Badage({ title, type ,action }: BadgeItem) {
    const baseClass = "rounded-sm px-2 pb-1 bg-red-200 w-fit flex items-center justify-center";
    const typeClass = {
        Low: "bg-gray-200 text-gray-800",
        Medium: "bg-yellow-100 text-yellow-800",
        High: "bg-red-100 text-red-800",
      }[type];
    return (
        <div onClick={()=>{action?.()}} className={cn(baseClass, typeClass)}>{title}</div>
    )
}

export default Badage
