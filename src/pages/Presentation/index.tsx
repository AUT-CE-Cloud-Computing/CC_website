import { FC } from "react";
import { Post } from "../../components/Base/Post";
import { Presentation } from "../../types/types";
import { PresentCard } from "../../components/Presentations/PresentCart";

// import temp from "../../assets/profile.png";
import temp2 from "../../assets/prof2.jpg";
import cov from "../../assets/hero2.jpg";
import { RiPresentationFill } from "react-icons/ri";

export const Presentations: FC = () => {
  const presentations: Presentation[] = [
    {
      id: 123,
      name: "alireza rahmani",
      topic: "kuber",
      slides: "are",
      demo: "naaa",
      topic_cover: cov,
      avatar: temp2,
    },
    {
      id: 124,
      name: "alireza rahmani",
      topic: "kuber",
      slides: "are",
      demo: "naaa",
      topic_cover: cov,
    },
    {
      id: 125,
      name: "alireza rahmani",
      topic: "kuber",
      slides: "are",
      demo: "naaa",
      avatar: temp2,
      codes: "are",
    },
    {
        id: 126,
        name: "alireza rahmani",
        topic: "kuber",
        slides: "are",
        demo: "naaa",
        codes: "are",
      },
  ];

  return (
    <Post>
      <div className="flex gap-2 text-xl items-center">
        <RiPresentationFill />
        <h1 className="font-bold ">Student Presentations</h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {presentations.map((presentation) => (
            <PresentCard key={presentation.id} presentation={presentation} />
          ))}
        </div>
      </div>
    </Post>
  );
};
