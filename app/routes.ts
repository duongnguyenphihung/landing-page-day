import {index, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    index("routes/landing-page.tsx"),
    route("landing", "routes/landing-page.tsx"),
] satisfies RouteConfig;
