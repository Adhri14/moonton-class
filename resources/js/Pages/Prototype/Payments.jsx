import CardPricing from "@/Components/CardPricing";
import Check from "@/Components/Check";
import Authenticated from "@/Layouts/Authenticated";

export default function Payments(props) {
    return (
        <Authenticated titleLink={props.link}>
            <div className="py-10 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* <!-- Basic --> */}
                    <CardPricing
                        price={299000}
                        titleButton="Start Basic"
                        type="Basic"
                        href="/"
                    >
                        <Check title="Unlock 10 basic movies" />
                        <Check title="Up to 3 users" />
                        <Check title="Support 24/7 ready" />
                    </CardPricing>

                    <CardPricing
                        variant="black"
                        titleButton="Subscribe Now"
                        price={800000}
                        type="For Greatest"
                        href="/"
                    >
                        <Check title="Unlock 200 awards movies" />
                        <Check title="180 subtitles available" />
                        <Check title="iOS, Android, TV" />
                        <Check title="Offline Mode" />
                        <Check title="Up to 20 users" />
                        <Check title="Support 24/7 ready" />
                    </CardPricing>
                </div>
            </div>
        </Authenticated>
    );
}
