import Image from "next/image";
// import styles from "@/styles/page.module.css";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSlider from "@/components/Testimonial";
import ContactDetails from "@/components/ContactDetails";
import Maps from "@/components/Maps";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="position-relative overflow-hidden content-section">
                <iframe
                    className="elementor-background-video-embed hero_video"
                    title="Dhirendra Soya Agro Private Limited"
                    width="1200"
                    height="675"
                    src="https://www.youtube.com/embed/d19QopRGJbs?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0&playlist=d19QopRGJbs&playsinline=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
                />
                <div className="container position-relative py-5 content_section" style={{zIndex:"9"}}>
                    <div className="col-lg-8">
                        <h1 className="title_one mb-4">Revolutionizing India's Oil Industry — <span className="text-primary">One Step at a Time</span></h1>
                        <p className="fs-5 mb-5">Dhirendra Soya Agro Pvt. Ltd. is pioneering the future of oil processing in India with advanced technology, cutting-edge infrastructure, and a bold, innovative vision. Backed by passionate minds and driven by quality, we’re shaping a smarter, cleaner, and more efficient oil industry.</p>
                        <Link href="/products" className="btn btn-primary me-2">Explore our products</Link>
                        <Link href="/get-in-touch" className="btn btn-white">Get in touch</Link>
                    </div>
                </div>
            </section>
            <section id="home_products" className="py-5">
                <div className="container">
                    <div className="text-center mt-md-5 mb-3">
                        <h1 className="title_one">Our Products</h1>
                    </div>
                    <Products />
                </div>
            </section>
            <section className="py-5 whyChooseUs bg-light">
                <div className="py-lg-5">
                    <WhyChooseUs />
                </div>
            </section>
            <section
                className="bg-secondary2"
                // style={{backgroundColor:"#000"}}
            >
                    <div className="container py-5">
                        <div className="row text-white py-lg-5">
                            <div className="col-lg-6">
                                <h4 className="title_one" style={{maxWidth:"550px"}}>Dhirendra Soya by the numbers</h4>
                                <p className="small">our numbers speak for our commitment. From daily production capacity to client satisfaction and industry reach, we’re proud of the milestones we’ve achieved on our journey of excellence in soybean processing.</p>
                                <div className="row stats">
                                    <div className="col-md-12 text-center">
                                        <h4 className="title_one mb-0">600<span className="text-primary">T</span></h4>
                                        <span>Per Day Intake Capacity</span>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="title_one mb-0">6<span className="text-primary">T</span></h4>
                                        <span>Lecithn per 600T Soybean</span>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="title_one mb-0">95<span className="text-primary">mT</span></h4>
                                        <span>Refined Soybean Oil</span>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="title_one mb-0">105<span className="text-primary">mT</span></h4>
                                        <span>Crude Soybean Oil per 600T</span>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="title_one mb-0">495<span className="text-primary">mT</span></h4>
                                        <span>Soybean DOC per 600T</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="d-flex align-items-center justify-content-center w-100 h-100">
                                    <div className="">
                                        <img src="images/logo/logo_white.svg" height={280} alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="testimonial py-5">
                <div className="container py-lg-5">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>
            </section>
            <Maps />
        </>
    );
}
