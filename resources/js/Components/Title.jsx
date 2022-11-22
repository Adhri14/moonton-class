import { string } from "prop-types";

Title.propTypes = {
    title: string,
    className: string,
};

export default function Title({ title, className = "" }) {
    return (
        <div
            className={`font-semibold text-[22px] text-black mb-4 ${className}`}
        >
            {title}
        </div>
    );
}
