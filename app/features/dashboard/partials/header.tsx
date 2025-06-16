
import { useLocation } from "react-router";
import { assets } from "~/assets/asset";
import SearchBar from "~/components/search_bar";

export default function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
    const { pathname } = useLocation();
    const menu = [
        {
            path: "/dashboard",
            label: "Dashboard",
        },
        {
            path: "/transaction",
            label: "Transaction",
        },
        {
            path: "/account",
            label: "Account",
        },
        {
            path: "/investment",
            label: "Investment",
        },
        {
            path: "/credit-card",
            label: "Credit Card",
        },
        {
            path: "/loan",
            label: "Loan",
        },
        {
            path: "/my-privileges",
            label: "My Privileges",
        },
        {
            path: "/service",
            label: "Service",
        },
        {
            path: "/setting",
            label: "Setting",
        },
    ];
    return (
        <header className="sticky top-0 z-10 flex flex-col gap-5 p-4 bg-white shadow">

            <div className="flex items-center justify-between">
                {/* hamberger menu */}
                <button className="text-gray-600 md:hidden focus:outline-none" onClick={onToggleSidebar}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>

                {/* title */}
                <h2 className="text-xl text-[#343C6A] font-semibold">{menu.find((item) => item.path === pathname)?.label}</h2>

                {/* image */}
                <div className="flex items-center space-x-4">
                    {/* search bar for tab and pc */}
                    <div className="hidden md:block">
                        <SearchBar />
                    </div>
                    {/* icon Settings */}
                    <div className="hidden cursor-pointer md:block">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#F5F7FA] rounded-full">
                            <assets.ic_settings_outline className="text-[#718EBF] fill-current" />
                        </div>
                    </div>
                    {/* icon notification */}
                    <div className="hidden cursor-pointer md:block">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#F5F7FA] rounded-full">
                            <assets.ic_notification className="text-[#FE5C73] fill-current" />
                        </div>
                    </div>
                    <div className="flex cursor-pointer md:block items-center space-x-4 w-[35px] h-[35px]">
                        <img
                            className="max-w-full contain-layout"
                            src={assets.image_person}
                        />
                    </div>
                </div>
            </div>
            {/* saerch mobile */}
            <div className="mt-2 md:hidden">
                <SearchBar />
            </div>
        </header>
    )
}