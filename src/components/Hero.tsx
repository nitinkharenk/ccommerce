export default function Hero() {
    return (
        <section className="">
        <main>
            <div>
            <div className=" md:h-[100vh] overflow-x-hidden">
                <video
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
                className="md:absolute w-full object-cover h-[100vh] overflow-x-hidden"
                >
                <source src="/2733283.mp4" type="video/mp4" />
                <source src="/2733283.webm" type="video/webm" />
                Your browser does not support the video tag.
                </video>
            </div>
            </div>
        </main>
        </section>
    );
    }