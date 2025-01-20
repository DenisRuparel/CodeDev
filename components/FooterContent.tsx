// import React from 'react'
// import { SignUpButton, useUser } from "@clerk/nextjs";
// import Image from "next/image";

// const FooterContent = () => {
//     const { user } = useUser();
//     const socialMedia = [
//         {
//             id: 1,
//             img: "/git.svg",
//             link: "https://github.com/DenisRuparel",
//         },
//         {
//             id: 2,
//             img: "/link.svg",
//             link: "https://www.linkedin.com/in/denis-ruparel-249539243/"
//         },
//         {
//             id: 3,
//             img: "/insta.svg",
//             link: "https://www.instagram.com/denis_ruparel_/"
//         },
//         {
//             id: 4,
//             img: "/tw.png",
//             link: "https://x.com/DenisRuparel"
//         },
//     ];
//     return (

//         <div className="flex items-center gap-6">
//             {user ? (
//                 <div>
//                     <div className="flex items-center md:gap-3 gap-6">
//                         {socialMedia.map((info) => (
//                             <div
//                                 key={info.id}
//                                 className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//                             >
//                                 <a href={info.link}>
//                                     <Image src={info.img} alt="icons" width={20} height={20} />
//                                 </a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             ) : (
//                 <div className="text-center">
//                     <p className="text-xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 mb-6 md:ml-21">
//                         Join us today and kickstart your coding adventure!
//                     </p>

//                     <SignUpButton mode="modal">
//                         <button className="px-6 py-3 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors">
//                             Sign Up
//                         </button>
//                     </SignUpButton>

//                     <div className="mt-8">
//                         <div className="flex justify-center items-center gap-4 md:gap-6">
//                             {socialMedia.map((info) => (
//                                 <div
//                                     key={info.id}
//                                     className="w-12 h-12 cursor-pointer flex justify-center items-center bg-opacity-75 backdrop-blur-lg bg-black-200 rounded-lg border border-black-300 transition-transform hover:scale-105"
//                                 >
//                                     <a href={info.link} target="_blank" rel="noopener noreferrer">
//                                         <Image src={info.img} alt="icon" width={24} height={24} />
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//             )}
//         </div>
//     );
// }

// export default FooterContent

import React from 'react'
import { SignUpButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

const FooterContent = () => {
    const { user } = useUser();
    const socialMedia = [
        {
            id: 1,
            img: "/git.svg",
            link: "https://github.com/DenisRuparel",
        },
        {
            id: 2,
            img: "/link.svg",
            link: "https://www.linkedin.com/in/denis-ruparel-249539243/"
        },
        {
            id: 3,
            img: "/insta.svg",
            link: "https://www.instagram.com/denis_ruparel_/"
        },
        {
            id: 4,
            img: "/tw.png",
            link: "https://x.com/DenisRuparel"
        },
    ];

    return (
        <div className="flex items-center gap-6">
            {user ? (
                <div className="mt-6">
                    <p className="text-gray-500 mb-3 text-center font-semibold">Follow me on:</p>
                    <div className="flex justify-center items-center gap-5">
                        {socialMedia.map((info) => (
                            <div
                                key={info.id}
                                className="w-12 h-12 cursor-pointer flex justify-center items-center bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-gray-900 transition-all transform hover:scale-110"
                            >
                                <a href={info.link} target="_blank" rel="noopener noreferrer">
                                    <Image src={info.img} alt="icon" width={28} height={28} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-lg font-semibold text-gray-400 mb-4">
                        Unlock your potential with our vibrant developer community!
                    </p>

                    <SignUpButton mode="modal">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors">
                            Get Started Now
                        </button>
                    </SignUpButton>

                    <div className="mt-6">
                        <p className="text-gray-500 mb-3">Follow me on:</p>
                        <div className="flex justify-center items-center gap-5">
                            {socialMedia.map((info) => (
                                <div
                                    key={info.id}
                                    className="w-12 h-12 cursor-pointer flex justify-center items-center bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-gray-900 transition-all transform hover:scale-110"
                                >
                                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={info.img} alt="icon" width={28} height={28} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FooterContent;
