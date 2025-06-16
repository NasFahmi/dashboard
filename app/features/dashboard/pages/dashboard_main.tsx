import { Link } from "react-router";

export default function DashboardMainPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="mb-4 text-2xl font-bold">Dashboard App</h1>
            <p className="text-gray-600">This is the dashboard App</p>
            <p className="text-gray-600">you can redirect to</p>
            <Link to={'/credit-card'}>
                Credit Card
            </Link>
            <Link to={'/service'}>
                Service
            </Link>
            <Link to={'/setting/edit-profile'}>
                Setting
            </Link>
        </div>
    )
}