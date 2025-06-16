import { Switch } from "~/components/ui/switch";

export default function PreferencePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 md:mt-14 md:items-start md:flex-row">
            {/* form edit */}
            <form action="" className="w-full">

                <div className="flex flex-col items-center w-full gap-4 mt-4 md:flex-row">

                    {/* Currency */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">Currency</h1>
                        <input
                            type="text"
                            placeholder="USD"
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                    {/* Time Zone */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">Time Zone</h1>
                        <input
                            type="text"
                            placeholder="(GMT-12:00) International Date Line West"
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                </div>
                <div className="">
                    <h1 className="text-[#333B69] text-sm font-semibold mb-[17px]">Notification</h1>
                    <div className="flex flex-col gap-[15px]">

                        <div className="flex items-center justify-start gap-4">
                            <Switch />
                            <p className="text-[13px]">I send or receive digita currency</p>
                        </div>
                        <div className="flex items-center justify-start gap-4">
                            <Switch />
                            <p className="text-[13px]">I receive merchant order</p>
                        </div>
                        <div className="flex items-center justify-start gap-4">
                            <Switch />
                            <p className="text-[13px]">There are recommendation for my account</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-end ">

                    <button type="submit" className=" cursor-pointer w-full md:max-w-[120px] bg-[#1814F3] text-white rounded-[9px] py-3 px-5 mt-4 text-sm md:text-base font-semibold hover:bg-[#1814f3b4] transition-colors duration-200 ease-in-out  ">
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}