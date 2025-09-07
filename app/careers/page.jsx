import dynamic from 'next/dynamic';
import Image from 'next/image'
const Stats = dynamic(() => import("@/components/Stats"));

export function generateMetadata() {
    return {
        title: "Careers at Dhirendra Soya | Join Our Team",
        description: "Explore career opportunities at Dhirendra Soya and join our mission to innovate agriculture.",
    };
}


const page = () => {
    return (
        <>
            <section className='bg-primary py-3'>
                <div className="container-fluid py-lg-4">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="text-center text-white py-5">
                                <h1 className="title_two mb-4 m-auto fs-1">Grow Your Career with Dhirendra Soya</h1>
                                {/* <h1 className="title_two fs-2 py-4">Build the Future with Dhirendra Soya</h1> */}
                                <p className=''>We believe that our people are the backbone of our success. We're looking for passionate, driven individuals who are ready to grow with us and make a real impact in the agri-tech and food processing industry. If you’re looking for a place that values innovation, integrity, and commitment your journey starts here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container pt-5">
                <div className="row align-items-center py-md-5">
                    <div className="col-12">
                        <div className="text-center mb-5">
                            <h2 className="title_one">Strength in Diversity</h2>
                        </div>
                        <div className="position-relative" style={{height:"500px"}}>
                            <Image 
                                src="/images/ofc_working.png" 
                                alt="ofc working" 
                                fill
                                style={{objectFit:"cover",  borderRadius:"12px"}}
                            />
                        </div>
                    </div>
                    <div className="col-lg-10 offset-lg-1 text-center py-5">
                        <p>Join a team that’s shaping the future of sustainable agriculture and food innovation. At Dhirendra Soya, we believe in empowering people, nurturing talent, and creating opportunities for growth across every role.</p>
                        <p>We’re headquartered in Neemuch(MP) — but our opportunities reach far beyond. Whether you’re in operations, R&D, sales, or marketing, you’ll find a place where your work makes an impact. Together, we’re building a healthier, more sustainable future.</p>
                    </div>
                </div>
            </div>
            <Stats />
        </>
    )
}

export default page
