"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface DataType {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
}

const AboutData: DataType[] = [
  {
    heading: "About Docusign",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "Docusign helps individuals and businesses sign documents securely and efficiently, eliminating paperwork delays.",
    link: "Learn more",
  },
  {
    heading: "Our Services",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "From eSignatures to contract lifecycle management, Docusign provides seamless digital agreement solutions.",
    link: "Learn more",
  },
  {
    heading: "Trusted Worldwide",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "Millions of users and enterprises worldwide trust Docusign for secure digital transactions and compliance.",
    link: "Learn more",
  },
];

const AboutUs = () => {
  return (
    <section id="aboutus-section" className="relative bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Title */}
        <h3 className="text-lg font-semibold text-blue-600 tracking-widest">
          ABOUT Signodoc
        </h3>
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mt-4">
          The Future of Digital Agreements
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Secure, fast, and reliable electronic agreements for businesses and individuals.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {AboutData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-left transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={item.imgSrc}
                alt={item.heading}
                width={80}
                height={80}
                className="mb-5"
              />
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">{item.heading}</h4>
              <p className="text-lg text-gray-600 mb-6">{item.paragraph}</p>
              <Link
                href="#"
                className="text-blue-600 font-semibold flex items-center hover:underline"
              >
                {item.link}
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
