import { Link, useLocation } from "react-router";

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { pathname } = useLocation();
    return (
        <>
            {/* Desktop sidebar */}
            <aside className="w-64 bg-blue-600 text-white hidden md:flex flex-col p-4">
                <h1 className="text-2xl font-bold mb-6">Admin</h1>
                <nav className="flex flex-col gap-4">
                    <Link to="/" className={pathname === "/" ? "font-bold" : "hover:underline"}>Home</Link>
                    <Link to="/users" className={pathname === "/users" ? "font-bold" : "hover:underline"}>Users</Link>
                    <Link to="/settings" className={pathname === "/settings" ? "font-bold" : "hover:underline"}>Settings</Link>
                </nav>
            </aside>

            {/* mobile sidebar */}
            {
                isOpen && (
                    <div className="fixed inset-0 z-50 flex md:hidden">
                        <div className="w-64 bg-blue-600 text-white p-4">
                            <button className="mb-4 text-white" onClick={onClose}>
                                ✕ Close
                            </button>
                            <h1 className="text-2xl font-bold mb-6">Admin mobile</h1>
                            <nav className="flex flex-col gap-4">
                                <Link to="/" className={pathname === "/" ? "font-bold" : "hover:underline"}>Home</Link>
                                <Link to="/users" className={pathname === "/users" ? "font-bold" : "hover:underline"}>Users</Link>
                                <Link to="/settings" className={pathname === "/settings" ? "font-bold" : "hover:underline"}>Settings</Link>
                            </nav>
                        </div>
                        {/* Backdrop */}
                        <div className="flex-1 bg-black opacity-20" onClick={onClose}></div>
                    </div>
                )
            }

        </>
    )
}