import Footer from "../componens/Footer.jsx";
import Header from "../componens/Header.jsx";
import VideoBackground from "../componens/VideoBackground.jsx";


export default function Dashboard() {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex-grow relative">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
                    <h2 className="text-4xl font-bold">Welcome to Global Country</h2>
                    <p className="text-lg">Please to continue</p>
                </div>
                <div className="inset-0 flex justify-center items-center">
                    <VideoBackground />
                </div>
            </div>
                <main>
                  <div className=" gap-11"> 
                  </div>
                </main>
                <Footer/>
        </div>
    );
}
