import {index, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("landing", "routes/landing-page.tsx"),
] satisfies RouteConfig;
