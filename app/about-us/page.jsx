
import dynamic from 'next/dynamic';
import Maps from '@/components/Maps'
import ContactDetails from '@/components/ContactDetails';
const CharAnim = dynamic(() => import("@/components/CharAnim"));


export function generateMetadata() {
    return {
        title: "About Us | Dhirendra Soya",
        description: "Learn more about Dhirendra Soya's mission, values, and team driving sustainable agriculture.",
    };
}

const page = () => {
    
    return (
        <>
            <div className='container py-5'>
                <div className="row align-items-center py-5 g-4">
                    <div className="col-lg-5">
                        <h1 className="title_one">Fueling Progress with Purity and Innovation</h1>
                        <p className='fs-5'>Founded with a vision to revolutionize the oil processing industry, Dhirendra Soya Agro Pvt. Ltd. is your trusted source for premium soybean products—backed by cutting-edge technology, quality commitment, and a passion to power healthier, sustainable living.</p>
                    </div>
                    <div className="col-lg-7 ps-xl-5">
                        <img src="images/products/about_us_product.png" alt="img" className='img-fluid' />
                    </div>
                </div>
                <div className="row align-items-center my-5 g-4">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <img src="images/products/whoWeAre.png" alt="img" className='img-fluid' style={{maxHeight:'380px'}} />
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <span className="text-primary fs-4 text-uppercase">Who We Are</span>
                        <CharAnim />
                        <p className=''>We bring together technology, experience, and a deep love for agriculture – all in one place – and we thrive when we deliver purity, quality, and impact to your plate.</p>
                        <p className=''>We believe in the strength of sustainable manufacturing and honest business. Our spirit is bold, and our inner changemaker says: Don’t just extract value from nature; give back and grow with it.</p>
                    </div>
                </div>
            </div>
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-7">
                            <span className="text-primary fs-4 text-uppercase">What We Do</span>
                            <h2 className="fs-1 fw-bold mb-4 mt-2">Discover Quality, Innovation & Trust in Every Drop</h2>
                            <p className=''>We are a company that specializes in the manufacture of soybean products. Our products are used in a variety of industries, including food production, cosmetics, and pharmaceuticals. We are committed to providing our customers with the highest quality products and services possible. We have a team of highly skilled and experienced professionals who are dedicated to providing our customers with the best possible experience. We are constantly striving to improve our products and services and to provide our customers with the best possible value for their money. We welcome you to our website and we hope that you will take the time to learn more about our company and our products.</p>
                        </div>
                        <div className="col-lg-5">
                            <div className="card bg-primary mb-4">
                                <div className="card-body text-white">
                                    <h3 className="fs-3 fw-bold mb-2">Our Mission</h3>
                                    <p className="mb-0">We are actively exploring opportunities in Agri-tech, recognizing that embracing innovation is essential for growth. Technology now plays an integral role in our daily lives—from the moment we wake up to when we sleep—and we believe it's crucial to adapt with the changing times.</p>
                                </div>
                            </div>
                            <div className="card bg-secondary">
                                <div className="card-body text-white">
                                    <h3 className="fs-3 fw-bold mb-2">Our Vission</h3>
                                    <p className="mb-0">We believe that leveraging deep tech in agriculture, logistics, and supply chain can create a transformative impact. Our goal is to drive long-term growth while continuing to positively influence thousands of lives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactDetails />
            <Maps />
        </>
    )
}

export default page
