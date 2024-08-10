"use client"

import { ArrowDownwardOutlined, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useState } from "react";

const Page = () => {
    return <div className="flex justify-center gap-x-10 px-40 placeholder-opacity-100 items-center pt-20 font-inter">
        <div className="min-w-80 mt-5"><img src="./img/coin.webp" className="h-80"/></div>
        <div className="flex flex-col gap-y-2 justify-center items-center">
            <div className="text-white text-[42px] max-w-[420px] font-bold text-center">
                Buy and Sell by minimal&nbsp;
                <span className="">fee.</span>
            </div>
            <div className="bg-neutral-950 flex flex-col p-2 rounded-[20px] gap-y-2 group relative m-auto">
                <div className="bg-neutral-900 bg-opacity-55 px-3 py-4 rounded-[15px] flex flex-col">
                    <div className="flex flex-col gap-y-1 text-neutral-400 font-bold">
                        <span className="">Sell</span>
                        <div className="flex justify-between">
                            <input className="h-10 bg-neutral-900 bg-opacity-0 px-2 text-[30px] focus:outline-none max-w-[250px]" value={0}></input>
                            <div 
                                class="rounded-full bg-neutral-950 flex px-2 items-center gap-x-1 cursor-pointer hover:bg-neutral-800"
                                onClick={()=>{console.log('sdfsd')}}
                            >
                                <img src="./img/ethereum-logo.png" className="h-[24px] bg-amber-600 bg-opacity-70 rounded-full"/>
                                <span>ETH</span>
                                <KeyboardArrowDownOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-400">
                    <div className="rounded-xl bg-neutral-900 border-[2px] border-neutral-950 w-[30px] h-[30px] items-center flex justify-center">
                        <ArrowDownwardOutlined />
                    </div>
                </div>
                <div className="bg-neutral-900 bg-opacity-55 px-3 py-4 rounded-[15px] flex flex-col">
                    <div className="flex flex-col gap-y-1 text-neutral-400">
                        <span className="">Sell</span>
                        <div className="flex">
                            <input className="h-10 bg-neutral-900 bg-opacity-0 px-2 text-[30px] focus:outline-none max-w-[250px]" value={0}></input>
                            <div className="rounded-full bg-neutral-950 flex px-2 items-center gap-x-1 cursor-pointer hover:bg-neutral-800">
                                <span className="pl-2.5">Select Token</span>
                                <KeyboardArrowDownOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[20px] flex flex-col text-neutral-500 justify-center items-center">
                <span>Trade your tokens with low fees,</span> 
                <span>earn yields and stake for real yield.</span>
            </div>
        </div>
    </div>
}

export default Page;