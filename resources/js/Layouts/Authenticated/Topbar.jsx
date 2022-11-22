import { Link } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import $ from "jquery";

export default function Topbar({ auth }) {
    const [dropdownButton, setDropDownButton] = useState(false);
    return (
        <div className="flex justify-between items-center">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
                style={{ backgroundImage: `url('/icons/ic_search.svg')` }}
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">
                    Welcome, {auth.auth.user.name}
                </span>
                {/* <!-- user avatar --> */}
                <div className="collapsible-dropdown flex flex-col gap-2 relative">
                    <button
                        type="button"
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                        onClick={() => setDropDownButton(!dropdownButton)}
                    >
                        <img
                            src="/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                        />
                    </button>
                    <div
                        className={`bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] ${
                            dropdownButton ? "block" : "hidden"
                        } overflow-hidden`}
                    >
                        <Link
                            href={
                                auth.auth.user.roles[0].name === "user"
                                    ? route("user.dashboard.index")
                                    : route("admin.dashboard.movie.index")
                            }
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </Link>
                        <Link
                            method="post"
                            href={route("logout")}
                            as="button"
                            className="transition-all hover:bg-sky-100 p-4 text-left"
                        >
                            Sign Out
                        </Link>
                    </div>
                </div>
            </div>
            {/* <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
            <script src="/script/script.js"></script> */}
        </div>
    );
}
