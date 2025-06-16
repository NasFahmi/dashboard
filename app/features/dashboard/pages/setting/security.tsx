import { Switch } from "~/components/ui/switch";

export default function SecurityPage() {
    return (
        <div className="flex flex-col items-start justify-center mt-[25px] md:mt-14">

            <h1 className="text-sm text-[#333B69] font-medium mb-3">Two-factor Authentication</h1>

            <div className="flex items-center justify-start gap-4 mb-[19px]">
                <Switch />
                <p className="text-[13px]">Enable or disable two factor authentication</p>
            </div>
            {/* form edit */}
            <form action="" className="w-full">
                <h1 className="text-[14px] text-[#333B69] font-medium">Change Password</h1>
                <div className="flex flex-col items-start justify-start w-full gap-4 mt-4 ">

                    {/* Current Password */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">Current Password</h1>
                        <input
                            type="password"
                            placeholder="******"
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                    {/* New Password */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">New Password</h1>
                        <input
                            type="password"
                            placeholder="******"
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
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