import { trustAgencyPoints, confidentialityPoints } from "../../components/customThemePoints"
import Image from "next/image"

export default function TrustContainers() {
    return (
        <div className="px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[55px] mx-32">


                {/* Left Container - Why Agencies Trust */}
                <div className="rounded-3xl p-2 relative" style={{ backgroundColor: "#e64a19" }}>
                    <h2 className="text-white text-xl font-bold mb-6">
                        Why Agencies Trust Integriti Studio
                    </h2>
                    <div className="space-y-6">
                        {trustAgencyPoints.map((point) => (
                            <div key={point.id} className="relative flex items-center pl-2">
                                <Image
                                    src="https://cdn.prod.website-files.com/683f4d103b2510d5796dca20/6859508f74693d9557d18eb8_Frame%201597884424.svg"
                                    alt="Check"
                                    className="tick-icon"
                                />
                                <span className="text-white text-md">{point.text}</span>

                            </div>
                        ))}
                    </div>
                </div>


                {/* Right Container - Confidentiality & NDA */}
                <div className="rounded-3xl p-2" style={{ backgroundColor: "#ede9e9" }}>
                    <h2 className="text-xl font-bold mb-6" style={{ color: "#e64a19" }}>
                        Confidentiality & NDA-First Culture
                    </h2>
                    <div className="space-y-4">
                        {confidentialityPoints.map((point) => (
                            <div key={point.id} className="relative flex items-center pl-8">
                                <Image
                                    src="https://cdn.prod.website-files.com/683f4d103b2510d5796dca20/685948fe7b049a9aed73af58_Group%201216325853.svg"
                                    alt="Check"
                                    className="tick-icon"
                                />
                                <span className="text-md leading-9" style={{ color: "#e64a19" }}>
                                    {point.text}
                                </span>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
