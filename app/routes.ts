import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { error } from "console";
import { ErrorBoundary } from "./root";

export default [
    // index("routes/root_layout.tsx"),
    layout("routes/root_layout.tsx",
        [
            index("routes/dashboard_main.tsx"),
            route("dashboard", "routes/dashboard.tsx"),
            route("account", "routes/account.tsx"),
            route("my-privileges", "routes/my_priveleges.tsx"),
            route("loan", "routes/loan.tsx"),
            route("transaction", "routes/transfer.tsx"),
            route("investment", "routes/investment.tsx"),
            route("credit-card", "routes/credit_card.tsx"),
            route("service", "routes/service.tsx"),
            route("setting", "routes/setting/setting_layout.tsx", [
                route("edit-profile", "routes/setting/edit_profile.tsx"),
                route("preference", "routes/setting/preference.tsx"),
                route("security", "routes/setting/security.tsx"),
            ]),
        ],
    ),

] satisfies RouteConfig;
