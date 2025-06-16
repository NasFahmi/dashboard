import { Link, useLocation } from "react-router";
import { assets } from "~/assets/asset";

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { pathname } = useLocation();
    console.log('Current pathname:', pathname);

    const menu = [
        {
            path: "/",
            icon: assets.ic_home,
            label: "Dashboard",
        },
        {
            path: "/transaction",
            icon: assets.ic_transfer,
            label: "Transaction",
        },
        {
            path: "/account",
            icon: assets.ic_person,
            label: "Account",
        },
        {
            path: "/investment",
            icon: assets.ic_economic_invesment,
            label: "Investment",
        },
        {
            path: "/credit-card",
            icon: assets.ic_credit_card,
            label: "Credit Card",
        },
        {
            path: "/loan",
            icon: assets.ic_bussines_loan,
            label: "Loan",
        },
        {
            path: "/my-privileges",
            icon: assets.ic_economic_idea,
            label: "My Privileges",
        },
        {
            path: "/service",
            icon: assets.ic_service,
            label: "Service",
        },
        {
            path: "/setting",
            icon: assets.ic_settings,
            label: "Setting",
        },

    ];
    return (
        <>
            {/* Desktop sidebar */}
            <aside className="w-[350px] bg-white overflow-y-auto  text-black hidden md:flex flex-col">
                {/* logo */}
                <div className="flex items-center justify-center mb-12 mt-7">
                    <img className="w-10/12" src={assets.image_logo} alt="logo" />
                </div>
                <nav className="flex flex-col mb-12 gap-9">
                    {menu.map(({ path, icon: Icon, label }) => {
                        const isActive = pathname === path;
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`relative flex items-center gap-5 px-4 py-3 transition-colors duration-200 ease-in-out
              ${isActive ? "text-[#1814F3] font-medium" : "text-[#B1B1B1] hover:text-[#7a7a7a] "}`}
                            >
                                {/* Indicator */}
                                {isActive && (
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#1814F3] rounded-r-md" />
                                )}
                                <Icon className="w-6 h-6 ml-3.5" />
                                <span>{label}</span>
                            </Link>
                        )
                    })}
                </nav>
            </aside >

            {/* mobile sidebar */}
            <div
                className={`fixed inset-0 z-50 flex md:hidden transition-opacity duration-300 ease-in-out 
                    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >

                {/* Backdrop */}
                <div
                    className={`
      absolute inset-0 bg-black transition-opacity duration-300 ease-in-out
      ${isOpen ? "opacity-20 pointer-events-auto" : "opacity-0"}
    `}
                    onClick={onClose}
                ></div>

                {/* sidebar */}
                <div
                    className={`w-64 bg-white text-black overflow-y-auto no-scrollbar shadow-xl transition-transform duration-300 ease-in-out 
                        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex items-center justify-between p-4 mt-2 mb-12">
                        <button className="" onClick={onClose}>
                            <svg className="w-8 h-8 text-[#000000]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="currentColor"></path> </g></svg>
                        </button>
                        <div className="flex items-center justify-center w-7/12 ">
                            <img className="" src={assets.image_logo} alt="logo" />
                        </div>
                    </div>
                    <nav className="flex flex-col mb-12 gap-9">
                        {menu.map(({ path, icon: Icon, label }) => {
                            const isActive = pathname === path;
                            return (
                                <Link
                                    key={path}
                                    to={path}
                                    onClick={onClose} // [opsional] Tutup sidebar saat item menu diklik
                                    className={`relative flex items-center gap-5 px-4 py-3 transition-colors duration-200 ease-in-out
                                        ${isActive ? "text-[#1814F3] font-medium" : "text-[#B1B1B1] hover:text-[#7a7a7a] "}`}
                                >
                                    {isActive && (
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#1814F3] rounded-r-md" />
                                    )}
                                    <Icon className="w-6 h-6 ml-3.5" />
                                    <span>{label}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
                {/* <div
                    className="flex-1 w-screen h-screen bg-black opacity-20"
                    onClick={onClose}
                ></div> */}
                {/* [3] Backdrop akan memudar (fade) dan bisa diklik */}
            </div>

        </>
    )
}