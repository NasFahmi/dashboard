import { assets } from "~/assets/asset";

// src/features/dashboard/NotFoundDashboard.tsx
export default function NotFoundDashboard() {
    return (
        <div className="flex items-center justify-center h-full text-center">
            <div>
                <img src={assets.image_not_found} className="h-auto mb-10 w-100" alt="not found" />
                <h1 className="text-2xl font-bold text-[#343C6A]">Oops! Page Not Found</h1>
                <p className="text-[#718EBF] mt-2">We couldn't find the dashboard page you’re looking for.</p>

            </div>
        </div>
    );
}
