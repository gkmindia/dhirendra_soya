import Link from 'next/link'

const SocialLink = () => {
    return (
        <>
            <Link target='_blank' href="https://in.linkedin.com/company/dhirendra-soya-agro-pvt-ltd?trk=public_jobs_topcard-org-name">
                <i className="bi bi-linkedin"></i>
            </Link>
            <Link target='_blank' href="https://www.instagram.com/dhirendrasoya/">
                <i className="bi bi-instagram"></i>
            </Link>
            <Link target='_blank' href="https://www.facebook.com/Dhirendra-Soya-Agro-102630532601062">
                <i className="bi bi-facebook"></i>
            </Link>
            <Link target='_blank' href="https://www.youtube.com/channel/UCwarkTs1rSUSWcavGgfRKlw">
                <i className="bi bi-youtube"></i>
            </Link>
        </>
    )
}

export default SocialLink
