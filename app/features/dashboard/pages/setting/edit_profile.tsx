import { assets } from "~/assets/asset";
import { DatePickerComponent } from "~/components/date_picker";

export default function EditProfilePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 md:mt-14 md:items-start md:flex-row">
            <div className="relative mb-[22px] mt-[25px] flex items-center rounded-full justify-center w-[170px] h-[170px] md:min-w-[110px] md:min-h[110px] md:max-w-[130px] md:max-h-[130px] ">
                <img src={assets.image_person} className="w-[170px] h-[170px] md:min-w-[110px] md:min-h[110px] md:max-w-[130px] md:max-h-[130px]" alt="profile" />
                <div className="cursor-pointer absolute bottom-[20px] right-0  flex justify-center items-center w-9 h-9 bg-[#396AFF] rounded-full">
                    <assets.ic_pencil className="text-base text-white fill-current " />
                </div>
            </div>
            {/* form edit */}
            <form action="" className="w-full">

                <div className="flex flex-col items-center w-full gap-4 mt-4 md:flex-row">

                    {/* Your Name */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">Your Name</h1>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={"Charlene Reed"}
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                    {/* User Name */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">User Name</h1>
                        <input
                            type="text"
                            placeholder="User Name"
                            value={"Charlene Reed"}
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full gap-4 mt-4 md:flex-row">

                    {/* Email */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">Email</h1>
                        <input
                            type="email"
                            placeholder="name@email.com"
                            value={"charlenereed@gmail.com"}
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                    {/* password */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">Password</h1>
                        <input
                            type="password"
                            placeholder="******"
                            value={"******"}
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full gap-4 mt-4 md:flex-row">
                    {/* Date of Birth */}

                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <div className="relative w-full">
                            <h1 className="text-xs text-[#232323] mb-1">Date of Birth</h1>
                            <DatePickerComponent />
                        </div>

                    </div>
                    {/* Present Address */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">Present Address</h1>
                        <input
                            type="text"
                            placeholder="Present Address"
                            value={"San Jose, California, USA"}
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full gap-4 mt-4 md:flex-row">

                    {/* Permanent Address */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">Permanent Address</h1>
                        <input
                            type="text"
                            placeholder="Permanent Address"
                            value={"San Jose, California, USA"}
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                    {/* City */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">City</h1>
                        <input
                            type="text"
                            placeholder="City"
                            value={"San Jose"}
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center w-full gap-4 mt-4 md:flex-row">

                    {/* Postal Code */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">Postal Code</h1>
                        <input
                            type="number"
                            placeholder="12345"
                            value={"45962"}
                            className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                        />
                    </div>
                    {/* Country */}
                    <div className="flex flex-col w-full gap-2 md:w-1/2">
                        <h1 className="text-xs text-[#232323]">Country</h1>
                        <input
                            type="text"
                            placeholder="Country"
                            value={"USA"}
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