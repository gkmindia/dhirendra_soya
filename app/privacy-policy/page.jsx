import Link from "next/link"

const page = () => {
    return (
        <>
            <section className='bg-light py-5'>
                <div className="py-md-4">
                    <h1 className="title_one text-center">Privacy Policy</h1>
                </div>
            </section>
            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <p>At Dhirendra Soya, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <Link className="text-primary fw-bold" href="/">www.dhirendrasoya.com</Link>, or use our products and services.</p>
                            <div className='mt-5'>
                                <h2 className="title_two mb-3">Information We Collect</h2>
                                <p>We may collect the following types of information:</p>
                                <ul>
                                    <li><strong>Personal Information:</strong> Name, email address, phone number, billing/shipping address, and payment details when you place an order or contact us.</li>
                                    <li><strong>Non-Personal Information:</strong> Browser type, device details, IP address, and browsing patterns for analytics and improvement.</li>
                                    <li><strong>Communication Data:</strong> Messages or inquiries you send through our contact forms or email.</li>
                                </ul>
                            </div>
                            <div className='mt-4'>
                                <h2 className="title_two mb-3">How We Use Your Information</h2>
                                <p>We use your information for purposes including:</p>
                                <ul>
                                    <li>Processing and fulfilling your orders.</li>
                                    <li>Responding to your inquiries and providing customer support.</li>
                                    <li>Sending important updates, order confirmations, or promotional offers (only with your consent).</li>
                                    <li>Improving our website, services, and user experience.</li>
                                    <li>Complying with legal obligations and preventing fraud.</li>
                                </ul>
                            </div>
                            <div className='mt-4'>
                                <h2 className="title_two mb-3">Sharing of Information</h2>
                                <p>We do not sell, rent, or trade your personal data. However, we may share information in the following cases:</p>
                                <ul>
                                    <li><strong>Service Providers:</strong> With trusted third-party providers (such as payment processors, delivery partners, or IT services) to complete transactions.</li>
                                    <li><strong>Legal Requirements:</strong> If required by law, regulation, or government authority.</li>
                                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or business restructuring.</li>
                                </ul>
                            </div>
                            <div className='mt-4'>
                                <h2 className="title_two mb-3">Cookies and Tracking</h2>
                                <p>Our Site may use cookies and similar technologies to:</p>
                                <ul>
                                    <li>Remember your preferences.</li>
                                    <li>Track website traffic and usage for analytics.</li>
                                    <li>Improve functionality and personalization.</li>
                                </ul>
                                <p>You may disable cookies through your browser settings, but some features of the Site may not function properly.</p>
                            </div>
                            <div className='mt-4'>
                                <h2 className="title_two mb-3">Data Security</h2>
                                <p>We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
                            </div>
                            <div className='mt-4'>
                                <h2 className="title_two mb-3">Data Retention</h2>
                                <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
                            </div>
                            <div className='mt-4'>
                                <h2 className="title_two mb-3">Your Rights</h2>
                                <p>Depending on applicable laws, you may have the right to:</p>
                                <ul>
                                    <li>Access the personal data we hold about you.</li>
                                    <li>Request corrections or updates.</li>
                                    <li>Request deletion of your data.</li>
                                    <li>Opt out of marketing communications.</li>
                                </ul>
                                <p>To exercise these rights, contact us using the details below.</p>
                            </div>
                            <div className='mt-4'>
                                <h2 className="title_two mb-3">Third-Party Links</h2>
                                <p>Our Site may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites.</p>
                            </div>
                            <div className='mt-4'>
                                <h2 className="title_two mb-3">Changes to This Policy</h2>
                                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Effective Date.”</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
