import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 mb-lg-5">
                        <div className="mb-4">
                            <span className="rounded-label">Why Choose Us</span>
                        </div>
                        <h2 className="title_two">Why <span className="text-primary">Dhirendra Soya</span> is The Right Choice for You</h2>
                    </div>
                    <div className="col-lg-9">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="card bg-light h-100">
                                    <div className="card-body">
                                        <Image src="/images/icons/factory.png" height={60} width={60} alt="icons" />
                                        <h3 className='my-3 fw-bold'>Advanced Manufacturing Excellence</h3>
                                        <p>we operate with cutting-edge technology and fully automated processes to ensure the highest standards in production, hygiene, and quality. Our modern infrastructure guarantees consistent output and minimal human error across all stages of manufacturing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card bg-light h-100">
                                    <div className="card-body">
                                        <Image src="/images/icons/badge.png" height={60} width={60} alt="icons" />
                                        <h3 className='my-3 fw-bold'>Uncompromised Quality & Purity</h3>
                                        <p>Quality is our commitment. We source the finest soybeans and follow stringent quality control procedures at every step to deliver pure, safe, and nutritionally rich soya products that meet both domestic and international standards.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="card bg-light">
                                    <div className="card-body">
                                        <Image src="/images/icons/potential-customers.png" height={60} width={60} alt="icons" />
                                        <h3 className='my-3 fw-bold'>Customer-Centric & Transparent</h3>
                                        <p>We believe in long-term partnerships built on trust and transparency. Whether it's timely delivery, tailored solutions, or responsive support, Dhirendra Soya stands out for its customer-first approach and ethical business practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card bg-primary h-100">
                            <div className="card-body text-white">
                                <Image src="/images/icons/environment.png" style={{filter:"invert(1)"}} height={60} width={60} alt="icons" />
                                <h4 className='my-3 fw-bold'>Sustainability & Responsibility</h4>
                                <p>we are committed to eco-friendly manufacturing practices that reduce waste and conserve resources. By promoting sustainable sourcing and ethical operations, we contribute to a healthier planet and a better future for the agricultural ecosystem.</p>
                                <Link href="/get-in-touch" className="btn btn-white">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default WhyChooseUs
