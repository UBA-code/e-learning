import heroVideo from "@/assets/home/hero-video.mp4";
import ReactPlayer from "react-player";
import thumbnil from "@/assets/home/hero-video-thumbnail.png";

//? icons
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useState } from "react";

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="video-box shadow-sm rounded-lg"
      onClick={() => setIsPlaying((prev) => !prev)}
    >
      <ReactPlayer
        playing={isPlaying}
        url={heroVideo}
        width={"100%"}
        height={"100%"}
        light={
          <div className="relative brightness-95">
            <img
              src={thumbnil}
              alt="thumbnail"
              className="rounded-lg"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <AiOutlinePlayCircle
                size={50}
                className="bg-slate-200/80 rounded-full"
              />
            </div>
          </div>
        }
      />
    </div>
  );
}
