import NavLink from "@/Components/NavLink";
import SubscriptionDetail from "@/Components/SubscriptionDetail";
import { Link } from "@inertiajs/inertia-react";
import { Fragment } from "react";
import { AdminMenu, UserMenu, UserOther } from "./ListMenu";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    {auth.auth.user.roles[0].name === "admin" && (
                        <div>
                            <div className="text-gray-1 text-sm mb-4">Menu</div>
                            {AdminMenu.map((item) => (
                                <NavLink
                                    key={item.id.toString()}
                                    href={route(item.link)}
                                    icon={item.icon}
                                    className={
                                        item.link === route().current()
                                            ? "active"
                                            : ""
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    )}

                    {auth.auth.user.roles[0].name === "user" && (
                        <Fragment>
                            {/* <!-- Menu --> */}
                            <div>
                                <div className="text-gray-1 text-sm mb-4">
                                    Menu
                                </div>
                                {UserMenu.map((item) => (
                                    <NavLink
                                        key={item.id.toString()}
                                        href={
                                            item.link === "#"
                                                ? "#"
                                                : route(item.link)
                                        }
                                        icon={item.icon}
                                        className={
                                            item.link === route().current()
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                            {/* <!-- ./Menu --> */}

                            {/* <!-- Others --> */}
                            <div>
                                <div className="text-gray-1 side-link mb-4">
                                    Others
                                </div>
                                {UserOther.map((item) => (
                                    <NavLink
                                        key={item.id.toString()}
                                        href={
                                            item.link === "#"
                                                ? "#"
                                                : route(item.link)
                                        }
                                        icon={item.icon}
                                        className={
                                            item.link === route().current()
                                                ? "active"
                                                : ""
                                        }
                                        method={
                                            item.name === "Logout"
                                                ? "post"
                                                : "get"
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                            {/* <!-- ./Others --> */}
                        </Fragment>
                    )}

                    {/* <!-- Subscription details --> */}

                    {auth?.activePlan && (
                        <SubscriptionDetail
                            isPrimary={auth?.activePlan?.name !== "Basic"}
                            name={auth?.activePlan?.name}
                            remainingActiveDays={auth?.activePlan?.remaining}
                            activeDays={auth?.activePlan?.activeDays}
                        />
                    )}

                    {/* <!-- ./Subscription details --> */}
                </div>
            </div>
        </aside>
    );
}
