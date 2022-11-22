import { func, oneOf, string } from "prop-types";

Alert.propTypes = {
    message: string,
    onClick: func,
    variant: oneOf(["danger", "warning", "success"]),
};

export default function Alert({ message, onClick, variant = "danger" }) {
    return (
        <div
            className={`w-full px-6 py-4 rounded-lg alert-${variant} mb-5 flex flex-row justify-between items-center`}
        >
            <p
                className={`text-base text-${
                    variant === "warning" ? "black" : "white"
                }`}
            >
                {message}
            </p>
            <button type="button" onClick={onClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke={variant === "warning" ? "#000" : "#fff"}
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    );
}
