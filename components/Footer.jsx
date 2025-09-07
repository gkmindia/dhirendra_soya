import Image from 'next/image'
import React from 'react'
import SocialLink from './SocialLink'
import Link from 'next/link'
import WhatsAppChat from './WhatsAppChat'

const Footer = () => {
    return (
        <>
            <footer className='bg-light py-4 py-md-5 border-top'>
                <div className="container">
                    <div className="row g-4 footer align-items-center">
                        <div className="col-12 text-center">
                            <Image src="/images/logo/soya_v.svg" width={300} height={200} alt="logo" />
                            <div className="py-3 border-top border-bottom mt-4 mb-md-5">
                                <p className="mb-0 fs-4 fw-bold text-primary"><i>Organically Grown. Reliable Suppliers of Soya Agro products</i></p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <h6>Quick Link</h6>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us">Aboout Us</Link></li>
                                <li><Link href="/products">Products</Link></li>
                                <li><Link href="/infrastructure">Infrastructure</Link></li>
                                <li><Link href="/careers">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <h6>Our Products</h6>
                            <ul>
                                <li><Link href="/specification/refined-soybean-oil">Refined Soybean Oil</Link></li>
                                <li><Link href="/specification/crude-oil">Crude Soybean Oil</Link></li>
                                <li><Link href="/specification/lecithin">Lecithin</Link></li>
                                <li><Link href="/specification/acid-oil">Acid Oil</Link></li>
                                <li><Link href="/specification/soybean-de-oiled-cake">Soybean DOC</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-6">
                            <div className="card bg-primary">
                                <div className="card-body text-white p-4">
                                    <h6>Contact Info</h6>
                                    <div className="d-flex gap-2 gap-md-4 flex-wrap py-2 fw-bold fs-5">
                                        <div className='d-flex gap-2 align-items-center'>
                                            <i className="bi bi-telephone"></i>
                                            <Link href="tel:+919131955066">
                                                <span>+91 9131955066</span>
                                            </Link>
                                        </div>
                                        <div className='d-flex gap-2 align-items-center'>
                                            <i className="bi bi-envelope-arrow-up"></i>
                                            <Link href="mailto:info@dhirendrasoya.com">info@dhirendrasoya.com</Link>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <i className="bi bi-pin-map-fill"></i>
                                        <p className="mb-0">Semali Chaudhari, Bhatkheda, Neemuch <br/> Madhya Pradesh 458441</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <WhatsAppChat /> */}
            
            <div className="bg-light border-top py-4">
                <div className="container">
                    <div className="col-12">
                        <div className="d-flex justify-content-between gap-2 flex-wrap small">
                            <div className='d-flex gap-2 align-items-center flex-wrap'>
                                <span className=''>Copyright © {new Date().getFullYear()} Dhirendra Soya Agro Pvt. Ltd.</span>
                                <div className="ms-2 ms-lg-5">
                                    <Link href="/privacy-policy" className='text-decoration-underline'>Privacy Policy</Link>
                                    <span className='mx-2'>|</span>
                                    <Link href="/terms-of-use" className='text-decoration-underline'>Terms of Use</Link>
                                </div>
                            </div>
                            <div className='d-flex gap-3 align-items-center footer_socialLink fs-6'>
                                <SocialLink />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
