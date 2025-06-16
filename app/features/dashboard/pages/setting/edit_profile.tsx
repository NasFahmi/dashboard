import { assets } from "~/assets/asset";

export default function EditProfilePage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative mb-[22px] mt-[25px] flex items-center rounded-full justify-center w-[170px] h-[170px] md:min-w-[110px] md:min-h[110px] md:max-w-[130px] md:max-h-[130px] ">
                <img src={assets.image_person} className="w-[170px] h-[170px] md:min-w-[110px] md:min-h[110px] md:max-w-[130px] md:max-h-[130px]" alt="profile" />
                <div className="cursor-pointer absolute bottom-[20px] right-0  flex justify-center items-center w-9 h-9 bg-[#396AFF] rounded-full">
                    <assets.ic_pencil className="text-base text-white fill-current " />
                </div>
            </div>
            {/* form edit */}
            <div className="flex flex-col items-center w-full gap-4 mt-4 md:flex-row">

                {/* Your Name */}
                <div className="flex flex-col w-full gap-2 md:w-1/2">
                    <h1 className="text-xs text-[#232323]">Your Name</h1>
                    <input
                        type="text"
                        placeholder="Classic"
                        className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                    />
                </div>
                {/* User Name */}
                <div className="flex flex-col w-full gap-2 md:w-1/2">
                    <h1 className="text-xs text-[#232323]">User Name</h1>
                    <input
                        type="text"
                        placeholder="My Card"
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
                        placeholder="Classic"
                        className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                    />
                </div>
                {/* password */}
                <div className="flex flex-col w-full gap-2 md:w-1/2">
                    <h1 className="text-xs text-[#232323]">Password</h1>
                    <input
                        type="password"
                        placeholder="My Card"
                        className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center w-full gap-4 mt-4 md:flex-row">

                {/* Date of Birth */}
                <div className="flex flex-col w-full gap-2 md:w-1/2">
                    <div className="relative w-full">
                        <h1 className="text-xs text-[#232323] mb-1">Date of Birth</h1>
                        <input
                            placeholder="25 January 2025"
                            type="date"
                            className="w-full border-1 bg-white rounded-[15px] py-3 px-5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px] appearance-none"
                        />
                        <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8BA3CB]">
                            ▼ {/* arrow down icon */}
                        </div>
                    </div>

                </div>
                {/* Present Address */}
                <div className="flex flex-col w-full gap-2 md:w-1/2">
                    <h1 className="text-xs text-[#232323]">Present Address</h1>
                    <input
                        type="text"
                        placeholder="My Card"
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
                        placeholder="Classic"
                        className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                    />
                </div>
                {/* City */}
                <div className="flex flex-col w-full gap-2 md:w-1/2">
                    <h1 className="text-xs text-[#232323]">City</h1>
                    <input
                        type="text"
                        placeholder="My Card"
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
                        placeholder="Classic"
                        className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                    />
                </div>
                {/* Country */}
                <div className="flex flex-col w-full gap-2 md:w-1/2">
                    <h1 className="text-xs text-[#232323]">Country</h1>
                    <input
                        type="text"
                        placeholder="My Card"
                        className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                    />
                </div>
            </div>
        </div>
    )
}