
import { assets } from "~/assets/asset";
import SearchBar from "~/components/search_bar";

export default function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {

    return (
        <header className="bg-white shadow p-4 flex-col gap-20">

            <div className="flex items-center justify-between">
                {/* hamberger menu */}
                <button className="md:hidden text-gray-600 focus:outline-none" onClick={onToggleSidebar}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>

                {/* title */}
                <h2 className="text-xl font-semibold">Dashboard</h2>

                {/* image */}
                <div className="flex items-center space-x-4">
                    {/* search bar for tab and pc */}
                    <div className="hidden md:block">
                        <SearchBar />
                    </div>
                    {/* icon Settings */}
                    <div className="hidden md:block">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#F5F7FA] rounded-full">
                            <assets.ic_settings_outline className="text-[#718EBF] fill-current" />
                        </div>
                    </div>
                        {/* icon notification */}
                    <div className="hidden   md:block">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#F5F7FA] rounded-full">
                            <assets.ic_notification className="text-[#FE5C73] fill-current"/>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 w-[35px] h-[35px]">
                        <img
                            className="max-w-full contain-layout"
                            src={assets.image_person}
                        />
                    </div>
                </div>
            </div>
            {/* saerch mobile */}
            <div className="md:hidden mt-2">
                <SearchBar />
            </div>
        </header>
    )
}