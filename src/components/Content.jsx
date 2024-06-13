import Video from "./Video";
import Categories from "./Categories";

export default function Content() {
  const videos = [
    {
      image:
        "https://i.ytimg.com/vi/wAIzxON_9kA/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBpIWpbu9AWeYkGYgMg8sXA1UswiQ",
      title: "Amazing Dub Session | Reggae, Dub Mixtape",
    },
    {
      image:
        "	https://i.ytimg.com/vi/SK82tSeLu7Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBfSiUJtZAlGcouKA4qx0wD92eCUQ",
      title:
        "Salí a vender boletos y unos ADOLESCENTES ME LEVANTARON | RADAR con Adrián Marcelo",
      channel: "Adrián Marcelo",
    },
    {
      image:
        "	https://i.ytimg.com/vi/_6RDEPv0a_8/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLAGCEOwRQ2YDkuC4CUII1e7FHnIxw",
      title: "Conferencia matutina de AMLO | Martes 11 de junio",
      channel: "UnoTV",
    },
  ];

  return (
    <section className=" col-start-2 col-end-3 row-start-2 row-end-3">
      <Categories />
      <section className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 pt-4">
        {videos.map((video) => {
          return (
            <Video
              key={`video-${video.title}`}
              image={video.image}
              title={video.title}
              channel={video.channel}
            />
          );
        })}
      </section>
    </section>
  );
}
