import "./App.css";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";

function App() {
  return (
    <>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <div className=" rounded-lg overflow-hidden shadow-sm flex flex-col">
            
            <div className="px-6 py-4 w-[200px] flex flex-col justify-start">
              <div className="font-bold text-xl mb-2 text-blue-400 text-start font-bold">All Tasks</div>
              <span className="text-sm text-gray-800 text-start ">10</span>
             
            </div>
          </div>

          <div className=" w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col">
            
            <div className="px-6 py-4  flex flex-col justify-start">
              <div className="font-bold text-xl mb-2 text-green-400 text-start font-bold">Done</div>
              <span className="text-sm text-gray-800 text-start">10</span>
            </div>
          </div>

          <div className="  w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col">
            
            <div className="px-6 py-4  flex flex-col justify-start">
              <div className="font-bold text-xl mb-2 text-yellow-400 text-start font-bold">Pending</div>
              <span className="text-sm text-gray-800 text-start">10</span>
            </div>
          </div>

          <div className=" w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col">
            
            <div className="px-6 py-4  flex flex-col justify-start">
              <div className="font-bold text-xl mb-2 text-red-400 text-start font-bold">Failed</div>
              <span className="text-sm text-gray-800 text-start ">10</span>
            </div>
          </div>
        </div>



    </>
  );
}

export default App;
