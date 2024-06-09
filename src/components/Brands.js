import React from "react";

const brandsData = [
    {
        imageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg",
        lightImageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
        altText: "graygrids",
        link: "#",
    },
    {
        imageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg",
        lightImageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
        altText: "lineicons",
        link: "#",
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg",
        lightImageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
        altText: "uideck",
        link: "#",
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg",
        lightImageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
        altText: "ayroui",
        link: "#",
    },
];

export default function Brands() {
    return (
        <section className="bg-white flex flex-col py-20 gap-10 sm:gap-20 lg:py-[120px] ">
            <p className="text-[2rem] sm:text-[3rem] font-bold">Ils nous font confiance</p>
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="flex flex-wrap items-center justify-center">
                            {brandsData.map((brand, i) => (
                                <SingleImage key={i} brand={brand} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const SingleImage = ({ brand }) => {
    const { link, imageSrc, lightImageSrc, altText } = brand;
    return (
        <>
            <a
                href={link}
                class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
            >
                <img src={imageSrc} alt={altText} class="h-10 w-full " />
                <img
                    src={{ lightImageSrc }}
                    alt={altText}
                    class="hidden h-10 w-full "
                />
            </a>
        </>
    );
};