import { node, number, oneOf, string } from "prop-types";

CardPricing.propTypes = {
    variant: oneOf(["white", "black"]),
    children: node,
    price: number,
    titleButton: string,
    type: string,
    href: string,
};

export default function CardPricing({
    variant = "white",
    children,
    price = 0,
    titleButton,
    type,
    typeButton,
    onClick,
    periodInMonths,
}) {
    const getMoney = () => {
        return Intl.NumberFormat("id-ID", {
            currency: "IDR",
            // style: "currency",
            maximumFractionDigits: 0,
            // currencySign: "",
        }).format(price);
    };
    return (
        <div
            className={`flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] w-[300px] card-${variant}`}
        >
            {/* <!-- Ornament Icon --> */}
            {variant === "black" && (
                <div className="bg-alerange rounded-full p-[13px] max-w-max">
                    <img src="/icons/ic_star.svg" width="24" alt="" />
                </div>
            )}
            {/* <!-- Top Content: Name-Price --> */}
            <div>
                <div className="text-sm mb-2">{type}</div>
                <div className="text-[28px] font-bold">IDR {getMoney()}</div>
                <p className="text-[#767676] text-xs font-light">
                    /{periodInMonths} months
                </p>
            </div>

            {/* <!-- Mid Content: Benefits --> */}
            <div className="flex flex-col gap-4">{children}</div>

            {/* <!-- Bottom: CTA Button --> */}
            <div>
                <button
                    onClick={onClick}
                    type={typeButton}
                    className={`rounded-2xl ${
                        variant === "black"
                            ? "bg-alerange"
                            : "border border-[#F1F1F1]"
                    } py-[13px] text-center grid w-full`}
                >
                    <span className="text-base font-semibold">
                        {titleButton}
                    </span>
                </button>
            </div>
        </div>
    );
}
