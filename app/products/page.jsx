import ContactDetails from '@/components/ContactDetails'
import Maps from '@/components/Maps'
import AcidOil from '@/components/products/AcidOil'
import CrudeOil from '@/components/products/CrudeOil'
import Lecithin from '@/components/products/Lecithin'
import SoyaDoc from '@/components/products/SoyaDoc'
import SoyaOil from '@/components/products/SoyaOil'
import Link from 'next/link'

export function generateMetadata() {
    return {
        title: "Our Products | Dhirendra Soya",
        description: "Explore our wide range of sustainable agricultural products designed to enhance productivity and support farmers across regions.",
    };
}

const productSection = [
    { Component: SoyaOil, href: "/specification/soybean-de-oiled-cake" },
    { Component: SoyaDoc, href: "/specification/soybean-de-oiled-cake" },
    { Component: Lecithin, href: "/specification/lecithin" },
    { Component: AcidOil, href: "/specification/acid-oil" },
    { Component: CrudeOil, href: "/specification/crude-oil" },
]

const page = () => {
    return (
        <>
            <div className='container'>
                {productSection.map(({Component, href}, index) =>(
                    <section className="py-5" key={index}>
                        <Component />
                        <div className="mt-4">
                            <Link 
                                href={href} 
                                className="btn btn-primary"
                            >
                                Read Specificaions<i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </section>
                ))}
            </div>
            <ContactDetails />
        </>
    )
}

export default page
