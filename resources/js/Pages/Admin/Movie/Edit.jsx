import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function AdminEditMovie(props) {
    const [imagePreview, setImagePreview] = useState("");
    const { data, setData, processing, errors, put } = useForm({
        ...props.movie,
    });

    useEffect(() => {
        setImagePreview(`/storage/${props.movie?.thumbnail}`);
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === props.movie.thumbnail) {
            delete data.thumbnail;
        }
        put(route("admin.dashboard.movie.update", props.movie.id), {
            ...data,
        });
    };
    return (
        <Authenticated auth={props} isTopbar>
            <Head title="Edit Movie" />
            <div className="flex flex-row items-center mb-5 -ml-3">
                <Link href={route("admin.dashboard.movie.index")}>
                    <img
                        src="/icons/ic_arrow-left.svg"
                        className="transition-all btn-back w-[46px] mr-2"
                        alt="stream"
                    />
                </Link>
                <h1 className="text-xl">Edit Movie : {props.movie.name}</h1>
            </div>
            <span className="text-gray-500 text-sm">Moonton/Movie/Edit</span>
            <div className="mb-4" />
            <form onSubmit={submit} className="mt-10">
                <div className="flex flex-row">
                    <div>
                        <label htmlFor="image">
                            {imagePreview === "" ? (
                                <div className="w-[250px] h-[300px] mr-10 bg-gray-400 rounded-xl flex flex-col p-10 justify-center items-center">
                                    <span className="text-base text-center w-full block text-white">
                                        Upload Thumbnail Movie*
                                    </span>
                                </div>
                            ) : (
                                <div className="mr-10 w-[250px] h-[300px] flex flex-col justify-center items-center">
                                    <img
                                        src={imagePreview}
                                        alt="Avatar User"
                                        className="w-full h-full rounded-xl bg-cover"
                                    />
                                </div>
                            )}
                        </label>
                        <InputError
                            message={errors.thumbnail}
                            className="mt-2"
                        />
                        <input
                            type="file"
                            className="absolute z-10 hidden"
                            accept="image/png, image/jpeg"
                            id="image"
                            name="thumbnail"
                            onChange={(event) => {
                                const image = event.target.files[0];
                                setImagePreview(URL.createObjectURL(image));
                                return setData("thumbnail", image);
                            }}
                        />
                    </div>
                    <div className="w-full">
                        <TextInput
                            variant="primary-outline"
                            label="Name Movie"
                            name="name"
                            value={data.name}
                            handleChange={onHandleChange}
                            classNameContainer="mb-3"
                        />
                        <InputError message={errors.name} className="mb-2" />
                        <TextInput
                            variant="primary-outline"
                            label="Category Movie"
                            name="category"
                            value={data.category}
                            handleChange={onHandleChange}
                            classNameContainer="mb-3"
                        />
                        <InputError
                            message={errors.category}
                            className="mb-2"
                        />
                        <TextInput
                            type="url"
                            variant="primary-outline"
                            label="Video URL"
                            name="video_url"
                            value={data.video_url}
                            handleChange={onHandleChange}
                            classNameContainer="mb-3"
                        />
                        <InputError
                            message={errors.video_url}
                            className="mb-2"
                        />
                        <TextInput
                            type="number"
                            variant="primary-outline"
                            label="Rating"
                            name="rating"
                            value={data.rating}
                            handleChange={onHandleChange}
                            classNameContainer="mb-3"
                        />
                        <InputError message={errors.rating} className="mb-2" />
                        <div className="mb-5 flex flex-row items-center mt-5">
                            <input
                                type="checkbox"
                                className="w-6 h-6 text-alerange bg-white rounded border-gray-30 focus:ring-0 checked:bg-alerange"
                                id="check"
                                value={data.is_featured}
                                defaultChecked={data.is_featured}
                                name="is_featured"
                                onChange={(event) => {
                                    return setData(
                                        "is_featured",
                                        event.target.checked
                                    );
                                }}
                            />
                            <label htmlFor="check" className="ml-3">
                                Is Featured
                            </label>
                        </div>
                        <InputError message={errors.is_featured} />
                        <Button
                            type="submit"
                            className="w-[120px] mt-3 text-white"
                            processing={processing}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </Authenticated>
    );
}
