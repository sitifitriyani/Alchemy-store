import ReactPlayer from 'react-player';
import video from "../assets/BgVideo.mp4";

export default function VideoBackground() {
    return(
<<<<<<< HEAD
        <div className="w-full h-full">
            <ReactPlayer url={video} playing loop muted width="100%" height="100%" className="object-cover" />
        </div>
    );
}
=======
        <div className="absolute inset-0 h-screen">
      <ReactPlayer url={video} playing loop muted className="w-full h-full" css={{ objectFit: 'cover' }}
      />
    </div>
    )
}
>>>>>>> c79317b5d723b2c48839370d279469a20e534702
