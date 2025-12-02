import React from 'react'

function Card({ data }: { data: any }) {
    return (
        <>{data.map((item: any) => {

        return    <>
                <div className=" w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col">
                    <div className="px-6 py-4  flex flex-col justify-start">
                        <div className=" text-xl mb-2 text-green-400 text-start font-bold">
                            {item.title}
                        </div>
                        <span className="text-sm text-gray-800 text-start">
                           {item.value}
                        </span>
                    </div>
                </div>
            </>
        })}</>
    )
}

export default Card