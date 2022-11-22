import Alert from "@/Components/Alert";
import Button from "@/Components/Button";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function AdminMovie(props) {
    const { delete: destroy, put } = useForm();
    const [closeAlert, setCloseAlert] = useState(true);

    useEffect(() => {
        if (props.flashMessage.message !== null) {
            setCloseAlert(true);
        }
    }, [props.flashMessage]);

    function checkItemDeleted(item) {
        if (item.deleted_at !== null) {
            put(route("admin.dashboard.movie.restore", item.slug));
        } else {
            destroy(route("admin.dashboard.movie.destroy", item.id));
        }
    }

    return (
        <Authenticated auth={props} isTopbar>
            <Head title="Admin" />
            {props.flashMessage.message !== null && closeAlert ? (
                <Alert
                    message={props.flashMessage.message}
                    variant={props.flashMessage.type}
                    onClick={() => setCloseAlert(false)}
                />
            ) : null}
            <Button
                type="button"
                isLink
                className="w-40 block text-white"
                href={route("admin.dashboard.movie.create")}
            >
                <span className="text-base font-semibold">
                    Insert New Movie
                </span>
            </Button>

            <span className="text-gray-500 text-sm my-4 block">
                Moonton/Movie/Create
            </span>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left text-gray-200">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="py-3 px-6 text-center">
                                Image
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Movie Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Video URL
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Type Movie
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.movies.length === 0 && (
                            <tr className="bg-white border-b text-gray-700">
                                <td
                                    className="py-4 px-6 text-center font-semibold"
                                    colSpan={6}
                                >
                                    Data not found
                                </td>
                            </tr>
                        )}
                        {props.movies.length > 0 &&
                            props.movies.map((item, index) => (
                                <tr
                                    key={index.toString()}
                                    className="bg-white border-b hover:bg-gray-50 text-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        <img
                                            src={`/storage/${item.thumbnail}`}
                                            alt="Thumbnail"
                                            className="w-[100px] h-[150px] rounded-md self-center mx-auto"
                                        />
                                    </th>
                                    <td className="py-4 px-6">{item.name}</td>
                                    <td className="py-4 px-6">
                                        {item.category}
                                    </td>
                                    <td className="py-4 px-6">
                                        <Link
                                            as="button"
                                            href={route(
                                                "admin.dashboard.movie.showMovie",
                                                item.slug
                                            )}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            {item.video_url}
                                        </Link>
                                    </td>
                                    <td className="py-4 px-6 text-left">
                                        {item.is_featured
                                            ? "Featured"
                                            : "Browse"}
                                    </td>
                                    <td className="py-4 px-6 text-left">
                                        <Link
                                            href={route(
                                                "admin.dashboard.movie.edit",
                                                item.id
                                            )}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </Link>{" "}
                                        |{" "}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                checkItemDeleted(item)
                                            }
                                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        >
                                            {item.deleted_at === null
                                                ? "Delete"
                                                : "Restore"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </Authenticated>
    );
}
