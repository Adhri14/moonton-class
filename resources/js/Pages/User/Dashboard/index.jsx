import CardMovie from "@/Components/CardMovie";
import Title from "@/Components/Title";
import Authenticated from "@/Layouts/Authenticated/index";
import { Head } from "@inertiajs/inertia-react";
import { Fragment } from "react";
import Flickity from "react-flickity-component";

export default function Dashboard(props) {
    const options = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    const movieFeatured = props.featureMovie;
    const movieBrowse = props.browse;

    console.log("browse : ", movieBrowse);

    return (
        <Authenticated auth={props} isTopbar>
            <Head title="Dashboard" />
            <Title title="Featured Movies" />
            <Flickity
                className="gap-[30px] overflow-x-hidden ring-transparent outline-none"
                elementType="div"
                options={options}
            >
                {movieFeatured.map((item) => (
                    <CardMovie
                        key={item.id.toString()}
                        title={item.name}
                        category={item.category}
                        rate={item.rating}
                        href={route("user.dashboard.movie.show", item.slug)}
                        imageSource={`/storage/${item.thumbnail}`}
                    />
                ))}
            </Flickity>

            {movieBrowse.length > 0 && (
                <Fragment>
                    <Title title="Browse" className="mt-10" />
                    <Flickity
                        className="gap-[30px] overflow-x-hidden ring-transparent outline-none"
                        elementType="div"
                        options={options}
                    >
                        {movieBrowse.map((item) => (
                            <CardMovie
                                key={item.id.toString()}
                                title={item.name}
                                category={item.category}
                                href={route(
                                    "user.dashboard.movie.show",
                                    item.slug
                                )}
                                imageSource={`/storage/${item.thumbnail}`}
                                variant="browse"
                            />
                        ))}
                    </Flickity>
                </Fragment>
            )}
        </Authenticated>
    );
}
