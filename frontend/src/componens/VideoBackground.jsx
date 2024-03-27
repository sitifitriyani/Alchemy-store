import ReactPlayer from 'react-player';
import video from "../assets/BgVideo.mp4";

export default function VideoBackground() {
    return(
        <div className="absolute inset-0 h-screen">
      <ReactPlayer url={video} playing loop muted className="w-full h-full" css={{ objectFit: 'cover' }}
      />
    </div>
    )
}