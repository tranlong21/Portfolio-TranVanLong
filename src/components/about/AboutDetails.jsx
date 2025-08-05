import React from 'react'
import { Link } from "react-router-dom";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
    return (
        <section className="py-20 w-full px-32">
            <div className='grid grid-cols-12 grid-rows-2 gap-8 w-full'>
                <ItemLayout className={'col-span-3 row-span-2'}>
                    <img
                        src={`${import.meta.env.BASE_URL}background/TranVanLong.png`}
                        alt="Tran Long"
                        className="w-auto h-60 object-cover"
                    />
                </ItemLayout>
                <ItemLayout className={'col-span-6 row-span-2 flex-col items-start !py-0'}>
                    <h2 className="text-2xl text-left w-full capitalize">
                        Giới thiệu
                    </h2>
                    <p className="font-light">
                        Tôi là sinh viên năm cuối ngành Công nghệ Phần mềm tại Trường Đại học Xây dựng Hà Nội, định hướng phát triển sự nghiệp với vị trí Frontend Developer.
                        Tôi có nền tảng vững chắc về HTML, CSS, JavaScript, ReactJS cùng khả năng tự học nhanh và làm việc nhóm hiệu quả.
                        Tôi mong muốn tìm kiếm cơ hội thực tập để áp dụng kiến thức đã học, trải nghiệm môi trường làm việc thực tế, đồng thời tích lũy kỹ năng và kinh nghiệm cần thiết cho sự nghiệp lâu dài trong ngành công nghệ.
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-3  flex-col items-start'}>
                    <h2 className="text-2xl text-left w-full capitalize">
                        Học vấn
                    </h2>

                    <h3 className="text-xm text-left w-full capitalize">
                        Trường Đại học Xây Dựng Hà Nội
                    </h3>
                    <p className="text-sm mb-2 font-medium">(2021 – 2026)</p>

                    <div className="flex flex-col gap-2 text-sm">
                        <p>- Hệ đào tạo: <span className="font-medium">Kỹ sư</span></p>
                        <p>- Xếp loại tốt nghiệp dự kiến: <span className="font-medium">Khá</span></p>
                    </div>

                </ItemLayout>

                <ItemLayout className="col-span-3 flex-col items-start">
                    <h2 className="text-2xl text-left w-full capitalize">
                        Liên hệ
                    </h2>

                    <div className="flex flex-col gap-2 text-sm mt-2">
                        <p>- Email: <span className="font-medium">tranlong210203@gmail.com</span></p>
                        <p>- SĐT: <span className="font-medium">+84 702 050 435</span></p>
                        <p>- Địa chỉ: <span className="font-medium">Phường Cự Khối, Long Biên,
                            Hà Nội</span></p>
                    </div>
                </ItemLayout>

                <ItemLayout
                    className={"col-span-4 !p-0"}
                >
                    <img
                        className="w-full h-auto"
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=tranlong21&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                        alt="Tran Long"
                        loading="lazy"
                    />
                </ItemLayout>
                <ItemLayout
                    className={"col-span-8 !p-0"}
                >
                    <img
                        className="w-full h-auto"
                        src={`https://github-readme-stats.vercel.app/api?username=tranlong21&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                        alt="Tran Long"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout
                    className={"col-span-full"}
                >
                    <img
                        className="w-full h-auto"
                        src={`https://skillicons.dev/icons?i=css,docker,figma,firebase,github,html,js,linux,mongodb,mysql,nodejs,npm,react,tailwind,threejs,vite,vscode,c,dart,flutter,py,`}
                        alt="Tran Long"
                        loading="lazy"
                    />
                </ItemLayout>
                <ItemLayout
                    className={"col-span-6 row-span-2 !p-0"}
                >
                    <Link
                        to="https://github.com/tranlong21/Profile-TranVanLong.git"
                        target="_blank"
                        className="w-full"
                    >
                        <img
                            className="w-[600px] h-auto"
                            src={`https://github-readme-stats.vercel.app/api/pin/?username=tranlong21&repo=Profile-TranVanLong&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=4`}
                            alt="Tran Long"
                            loading="lazy"
                        />
                    </Link>

                </ItemLayout>
                <ItemLayout
                    className="col-span-6 flex-col items-start !p-4 "
                >
                    <h2 className="text-2xl text-left w-full capitalize">
                        Sở thích cá nhân
                    </h2>
                    <p className="font-light">
                        Ngoài lập trình, tôi thích nghe nhạc, xem phim và khám phá những ý tưởng UI/UX mới. Tôi cũng yêu thích làm việc nhóm và chia sẻ kiến thức với mọi người.
                    </p>
                </ItemLayout>

                <ItemLayout
                    className="col-span-6 flex-col items-start !p-4"
                >
                    <h2 className="text-2xl text-left w-full capitalize">
                        Cam kết & kỳ vọng
                    </h2>
                    <p className="font-light">
                        Tôi luôn chủ động học hỏi, tiếp thu ý kiến để hoàn thiện bản thân. Tôi mong muốn được làm việc trong môi trường chuyên nghiệp, nơi tôi có thể đóng góp giá trị đồng thời tích lũy kinh nghiệm cho sự nghiệp lâu dài.
                    </p>
                </ItemLayout>

            </div>
        </section>
    )
}

export default AboutDetails
