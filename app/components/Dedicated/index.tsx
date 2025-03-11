import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Import checkmark icon

const securityStandards = [
  "ISO 27001",
  "PCI Data Security Standard",
  "SSAE 18 (SOC 1 & 2)",
  "CSA STAR",
  "APEC PRP",
];

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/logos/dedicated.png" alt="man-icon" width={416} height={530} className="mx-auto rounded-xl md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-6xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
  Signodoc Meets the Highest Security Standards
</h2>

<p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
  We ensure the safety of your digital agreements by meeting or exceeding stringent global security standards.
</p>

<p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start">
  {securityStandards.map((standard, index) => (
    <div key={index} className="flex flex-col items-center lg:items-start">
      <div className="flex items-center gap-2">
        <CheckCircleIcon className="h-6 w-6 text-blue-600" /> {/* Checkmark Icon */}
        <span>{standard}</span>
      </div>
      {index !== securityStandards.length - 1 && <hr className="w-full border-gray-300 my-2" />} {/* Line Separator */}
    </div>
  ))}
</p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
