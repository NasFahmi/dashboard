import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    // index("routes/root_layout.tsx"),
    layout("routes/root_layout.tsx", [
        index("routes/dashboard.tsx"),
        route("credit-card", "routes/credit_card.tsx"),
        route("service", "routes/service.tsx"),
        route("setting", "routes/setting/setting_layout.tsx", [
            route("edit-profile", "routes/setting/edit_profile.tsx"),
            route("preference", "routes/setting/preference.tsx"),
            route("security", "routes/setting/security.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
