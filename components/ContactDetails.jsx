import Link from 'next/link'
import React from 'react'

const ContactDetails = () => {
    return (
        <section className='bg-secondary2 py-4'>
            <div className="container">
                <div className="d-flex gap-3 flex-wrap justify-content-between">
                    <div className="d-flex gap-3 gap-lg-5 flex-wrap py-2 fw-bold fs-5 text-white">
                        <div className='d-flex gap-2 align-items-center'>
                            <i className="bi bi-telephone text-primary"></i>
                            <Link href="tel:+919131955066">
                                <span>+91 9131955066</span>
                            </Link>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <i className="bi bi-envelope-arrow-up text-primary"></i>
                            <Link href="mailto:info@dhirendrasoya.com">info@dhirendrasoya.com</Link>
                        </div>
                    </div>
                    <div>
                        <Link href="/get-in-touch" className='btn btn-primary'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactDetails
