import CardPricing from "@/Components/CardPricing";
import Check from "@/Components/Check";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";

export default function Payments(props) {
    const plans = props.plan;

    const onSelectPlan = (id) => {
        Inertia.post(
            route("user.dashboard.subscription.userSubscribe", {
                subscriptionPlan: id,
            }),
            {},
            {
                only: ["userSubscription"],
                onSuccess: ({ props }) => {
                    console.log("on success : ", props);
                    onSnapMidtrans(props.userSubscription);
                },
            }
        );
    };

    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
            onSuccess: function (result) {
                Inertia.visit(route("user.dashboard.success.payment"));
            },
            // Optional
            onPending: function (result) {
                console.log("pending : ", result);
            },
            // Optional
            onError: function (result) {
                Inertia.visit(route("user.dashboard.failed.payment"));
            },
        });
    };

    return (
        <Authenticated auth={props} isTopbar={false}>
            <Head title="Subscription">
                {/* <!-- TODO: Remove ".sandbox" from script src URL for production environment. Also input your client key in "data-client-key" --> */}
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={props.env.MIDTRANS_CLIENTKEY}
                ></script>
            </Head>
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
                    {plans.map((item) => {
                        const featured = JSON.parse(item.featured);
                        return (
                            <CardPricing
                                key={item.id}
                                price={item.price}
                                periodInMonths={item.active_period_in_months}
                                titleButton={
                                    item.name === "Basic"
                                        ? "Start Basic"
                                        : "Subscribe Now"
                                }
                                type={item.name}
                                variant={
                                    item.name !== "Basic" ? "black" : "white"
                                }
                                typeButton="button"
                                onClick={() => onSelectPlan(item.id)}
                            >
                                {featured.map((v, i) => (
                                    <Check key={i} title={v} />
                                ))}
                            </CardPricing>
                        );
                    })}
                </div>
            </div>
        </Authenticated>
    );
}
