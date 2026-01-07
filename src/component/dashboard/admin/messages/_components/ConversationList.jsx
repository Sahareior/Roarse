import React from 'react';


const ConversationCard = () => {
    return (
        <div className="flex w-[30vw] border-b p-4 cursor-pointer hover:bg-gray-100">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold mr-4">
                A
            </div>  
            <div className="flex-1">
                <div className="flex justify-between">
                    <h4 className="font-semibold">Alice Johnson</h4>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, incidunt!</p>
            </div>
        <div className='flex gap-2 flex-col items-center'>
            <p>Dec 16</p>
            <p className='py-[0.6px] px-3 rounded-2xl bg-[#DCFCE7]'>Active</p>
        </div>
        </div>
    );
};

const ConversationList = () => {
    return (
        <div>
            {
                [1, 2, 3, 4, 5].map((item) => (
                    <ConversationCard key={item} />
                ))
            }
        </div>
    );
};

export default ConversationList;