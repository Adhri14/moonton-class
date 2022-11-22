import React from "react";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/inertia-react";

Button.propTypes = {
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    isLink: PropTypes.bool,
    href: PropTypes.string,
};

export default function Button({
    type = "submit",
    className = "",
    processing = false,
    children,
    variant = "primary",
    isLink = false,
    href = "/",
}) {
    if (isLink) {
        return (
            <Link
                href={href}
                className={`rounded-2xl py-[13px] text-center btn-${variant} ${className}`}
            >
                <span className="text-base font-semibold">{children}</span>
            </Link>
        );
    }
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
