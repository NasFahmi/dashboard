import { Link, Outlet, useLocation } from "react-router";

export default function SettingLayoutPage() {
    const location = useLocation();

    const tabs = [
        { label: 'Edit Profile', path: '/setting/edit-profile' },
        { label: 'Preference', path: '/setting/preference' },
        { label: 'Security', path: '/setting/security' },
    ];
    return (
        <div className="flex-col w-full w-flex p-[25px]">
            <div className="bg-white ronded-[15px] px-[25px] py-[22px]">
                {/* header nav */}
                <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 border-b-[#EBEEF2]">
                    {tabs.map((tab) => {
                        const isActive = location.pathname === tab.path;

                        return (
                            <Link key={tab.path} to={tab.path} className="flex-1 text-center">
                                <div className="relative py-3">
                                    <h1 className={`text-[13px] font-bold ${isActive ? 'text-blue-600' : 'text-[#718EBF]'}`}>
                                        {tab.label}
                                    </h1>
                                    {isActive && (
                                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-4/5 rounded-t-md bg-blue-600" />
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