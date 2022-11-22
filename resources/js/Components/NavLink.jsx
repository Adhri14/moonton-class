import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({
    href,
    className = "",
    children,
    icon,
    method = "get",
}) {
    return (
        <Link
            href={href !== null ? href : null}
            as="button"
            method={method}
            className={"side-link " + className}
        >
            {icon}
            {children}
        </Link>
    );
}
