import CustomButton from "../components/Custombutton"
import {SearchOutlined} from '@mui/icons-material'
export default function Page() {
    return <header className="flex w-full py-3 justify-between bg-[#131313] items-center px-3">
        <div className="mx-2.5 rounded-full items-center flex gap-x-7 text-primary font-bold text-[18px]">
            <div className="flex gap-x-1 text-[14px] items-center text-['text-main']">
                <img src="./img/logo1.webp" className="h-[20px] bg-primary"/> 
                <span className="text-amber-500">MickySwap</span>
            </div>
            <div>Trade</div>
            <div>Sell</div>
            <div>Swap</div>
        </div>
        <div className="rounded-full border-opacity-20 border border-gray-400 px-1 py-[4px] flex w-96 text-[14px] items-center">
            <div className="text-gray-400 px-1"><SearchOutlined fontSize="small"/></div>
            <input type="text" className="bg-transparent w-full font-bold focus:outline-none py-1 text-neutral-500" placeholder="Search tokens and NFT collections"/>
            <div className="bg-neutral-900 px-[6px] rounded-[5px] text-[12px] mr-1 text-neutral-500 font-bold">/</div>
        </div>
        <div className="flex items-center text-gray-800 gap-x-5 text-primary font-bold">
            <div>Learn</div>
            <div>Help</div>
            {CustomButton("Connect Wallet")}
        </div>
    </header>
}