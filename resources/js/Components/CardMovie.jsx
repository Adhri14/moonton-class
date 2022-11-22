import { Link } from "@inertiajs/inertia-react";
import { number, oneOf, string } from "prop-types";

CardMovie.propTypes = {
    imageSource: string,
    rate: number,
    title: string,
    category: string,
    href: string,
    variant: oneOf(["featured", "browse"]),
};

export default function CardMovie({
    imageSource,
    rate,
    title,
    category,
    href,
    variant = "featured",
}) {
    if (variant === "browse") {
        return (
            <div className="relative group overflow-hidden mr-[30px]">
                <img
                    src={imageSource}
                    className="object-cover rounded-[30px] h-[340px] w-[250px]"
                    alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
                    <div className="px-7 pb-7">
                        <div className="font-medium text-xl text-white">
                            {title}
                        </div>
                        <p className="mb-0 text-gray-300 text-base mt-[10px]">
                            {category}
                        </p>
                    </div>
                </div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500"
                >
                    <img
                        src="/icons/ic_play.svg"
                        className=""
                        width="50"
                        alt=""
                    />
                </div>
                <Link href={href} className="inset-0 absolute z-50"></Link>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden group mr-[30px]">
            <img
                src={imageSource}
                className="object-cover rounded-[30px] w-[520px] h-[340px]"
                alt=""
            />
            {/* <!-- rating --> */}
            <div className="rating absolute top-0 left-0">
                <div className="p-[30px] flex items-center gap-1">
                    <img src="/icons/ic_star.svg" alt="" />
                    <span className="text-sm font-medium text-white mt-1">
                        {rate}/5.0
                    </span>
                </div>
            </div>
            {/* <!-- bottom detail --> */}
            <div
                className="absolute bottom-0 h-[100px] left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                rounded-br-[28px] flex justify-between items-center px-7 h-[130px]"
            >
                <div>
                    <div className="font-medium text-[22px] text-white">
                        {title}
                    </div>
                    <p className="mb-0 text-white text-sm font-light">
                        {category}
                    </p>
                </div>
                <div className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                    <img src="/icons/ic_play.svg" width="50" alt="" />
                </div>
            </div>
            <Link href={href} className="inset-0 absolute z-50"></Link>
        </div>
    );
}
