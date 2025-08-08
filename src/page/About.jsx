import React from 'react';
import HomeButton from '../components/share/HomeButton';
import AboutDetails from '../components/about/AboutDetails';
import TranVanLongCanvas from '../components/canvas/TranVanLongCanvas';
import FireFliesBackground from '../components/share/FireFliesBackground';

export default function About() {
    return (
        <div
            className="w-full min-h-screen overflow-x-hidden"
            style={{
                backgroundImage: `url('${import.meta.env.BASE_URL}background/about-background.png')`,
                width: "100vw",
                minHeight: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                position: "relative",
            }}
        >
            {/* Phần trên: Model + Text */}
            <div className="relative w-full h-[70vh] xs:h-[75vh] sm:h-screen flex flex-col items-center justify-center z-20">

                {/* Model */}
                <div className="absolute top-[40%] xs:top-[42%] sm:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[90%] sm:max-w-full">
                    <TranVanLongCanvas />
                </div>

                {/* Text */}
                <div className="absolute flex flex-col items-center text-center 
                top-[80%] xs:top-[78%] sm:top-[80%] 
                left-1/2 -translate-y-1/2 -translate-x-1/2 px-4">

                    {/* h1 luôn 1 hàng */}
                    <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-accent drop-shadow-md whitespace-nowrap">
                        Trần Văn Long
                    </h1>

                    {/* p chỉ 2 hàng */}
                    <p className="font-light text-foreground text-sm xs:text-base sm:text-lg mt-2 xs:mt-3 sm:mt-4 
                max-w-[90%] sm:max-w-[500px] leading-relaxed drop-shadow-md
                overflow-hidden text-ellipsis line-clamp-2">
                        Kéo xuống và đọc những thông tin bên dưới để hiểu rõ về tôi.
                    </p>

                </div>
            </div>

            {/* Nút về trang chủ */}
            <HomeButton />

            {/* Phần chi tiết giới thiệu */}
            <AboutDetails />

            {/* Hiệu ứng background */}
            <FireFliesBackground />
        </div>
    );
}
