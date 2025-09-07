import Link from 'next/link'
import React from 'react'
import SocialLink from './SocialLink'

const TopContactDetails = () => {
  return (
        <div className='bg-primary'>
            <div className="container text-white py-2">
                <div className="d-flex gap-3 flex-wrap justify-content-between align-items-center">
                    <div className='d-flex gap-4 gap-lg-5 align-items-center'>
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
                    <div className='d-flex gap-3 align-items-center footer'>
                        <SocialLink />
                    </div>

                </div>
            </div>
        </div>
  )
}

export default TopContactDetails
