import { Link, Outlet, useLocation } from "react-router";

export default function SettingLayoutPage() {
    const location = useLocation();

    const tabs = [
        { label: 'Edit Profile', path: '/setting/edit-profile' },
        { label: 'Preference', path: '/setting/preference' },
        { label: 'Security', path: '/setting/security' },
    ];
    return (
        <div className="flex-col w-full p-[25px]">
            <div className="bg-white rounded-[15px] px-[25px] py-[22px]">
                {/* header nav */}
                <div className="flex flex-wrap gap-14 items-center border-b border-[#EBEEF2] md:justify-start justify-between gap-2">
                    {tabs.map((tab) => {
                        const isActive = location.pathname === tab.path;

                        return (
                            <Link key={tab.path} to={tab.path} className="">
                                <div className="relative py-3">
                                    <h1
                                        className={`text-[13px] font-bold ${isActive ? "text-blue-600" : "text-[#718EBF]"
                                            }`}
                                    >
                                        {tab.label}
                                    </h1>
                                    {isActive && (
                                        <div className="absolute left-0 bottom-0 h-[3px] w-full rounded-t-md bg-blue-600" />
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <Outlet />
            </div>
        </div>

    );
}