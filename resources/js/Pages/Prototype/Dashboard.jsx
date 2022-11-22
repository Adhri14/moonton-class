import CardMovie from "@/Components/CardMovie";
import Title from "@/Components/Title";
import Authenticated from "@/Layouts/Authenticated/index";
import Flickity from "react-flickity-component";

const dummy_data = [
    {
        id: 1,
        title: "The Batman in love",
        slug: "the-batman-in-love",
        category: "Action • Horror",
        rate: 4.5,
        imageSource: "/images/featured-1.png",
    },
    {
        id: 2,
        title: "Despicable Me 2",
        slug: "despicable-me-2",
        category: "Action • Adventure",
        rate: 4.2,
        imageSource: "/images/featured-2.png",
    },
    {
        id: 3,
        title: "Train Dragons II",
        slug: "train-dragins-ii",
        category: "Love • Adventure",
        rate: 4.9,
        imageSource: "/images/featured-3.png",
    },
    {
        id: 4,
        title: "The Batman in love",
        slug: "the-batman-in-love",
        category: "Action • Horror",
        rate: 4.5,
        imageSource: "/images/featured-1.png",
    },
];

const dummy_data_2 = [
    {
        id: 1,
        title: "Meong Golden",
        slug: "meong-golden",
        category: "Horor • Love",
        imageSource: "/images/browse-1.png",
    },
    {
        id: 2,
        title: "Strange",
        slug: "strange",
        category: "2022",
        imageSource: "/images/browse-2.png",
    },
    {
        id: 3,
        title: "Fornite",
        slug: "fornite",
        category: "2022",
        imageSource: "/images/browse-3.png",
    },
    {
        id: 4,
        title: "Kings Queen",
        slug: "king's-queen",
        category: "2022",
        imageSource: "/images/browse-4.png",
    },
    {
        id: 5,
        title: "Morbius",
        slug: "morbius",
        category: "2022",
        imageSource: "/images/browse-5.png",
    },
    {
        id: 6,
        title: "Meong Golden",
        slug: "meong-golden",
        category: "Horor • Love",
        imageSource: "/images/browse-1.png",
    },
];

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

    return (
        <Authenticated isTopbar titleLink={props.link}>
            <Title title="Featured Movies" />
            <Flickity
                className="gap-[30px] overflow-x-hidden ring-transparent outline-none"
                elementType="div"
                options={options}
            >
                {dummy_data.map((item) => (
                    <CardMovie
                        key={item.id.toString()}
                        title={item.title}
                        category={item.category}
                        rate={item.rate}
                        href={route("prototype.movie.show", item.slug)}
                        imageSource={item.imageSource}
                    />
                ))}
            </Flickity>

            <Title title="Browse" className="mt-10" />
            <Flickity
                className="gap-[30px] overflow-x-hidden ring-transparent outline-none"
                elementType="div"
                options={options}
            >
                {dummy_data_2.map((item) => (
                    <CardMovie
                        key={item.id.toString()}
                        title={item.title}
                        category={item.category}
                        rate={item.rate}
                        href={route("prototype.movie.show", item.slug)}
                        imageSource={item.imageSource}
                        variant="browse"
                    />
                ))}
            </Flickity>
        </Authenticated>
    );
}
