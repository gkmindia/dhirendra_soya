'use client'
import Image from 'next/image'
import countries from 'world-countries';
import flags from 'emoji-flags';
import { useState } from 'react';
import Maps from '@/components/Maps';
import Stats from '@/components/Stats';
import toast from 'react-hot-toast';

const page = () => {
    const [selected, setSelected] = useState({ name: 'India', code: '+91' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    // Format countries to include flags and calling codes
    const formattedCountries = countries
        .filter((c) => c.idd?.root && c.idd.suffixes?.length)
        .map((country) => {
            const dialCode = `${country.idd.root}${country.idd.suffixes[0]}`;
            const flag = flags[country.cca2]?.emoji || '';
            return {
                name: country.name.common,
                code: dialCode,
                flag: flag,
                cca2: country.cca2,
            };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            phone: `${selected.code}-${formData.phone}`,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await res.json();
            console.log(result);
            if (result.success) {
                toast.success('Your message has been sent successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className='get-in-touch py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="py-4 mb-4">
                                <h5 className="fw-bold fs-4 text-dark mb-1">How do we get in touch?</h5>
                                <p className="mb-0">Leave us your details and we'll reach out within 24hours!</p>
                            </div>
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-12">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <div className="d-flex align-items-center">
                                        <select
                                            className="form-select me-2"
                                            style={{ maxWidth: '130px' }}
                                            value={selected.code}
                                            onChange={(e) => {
                                                const newCountry = formattedCountries.find((c) => c.code === e.target.value);
                                                setSelected(newCountry);
                                            }}
                                        >
                                            {formattedCountries.map((country, index) => (
                                                <option key={index} value={country.code}>
                                                    {country.flag} ({country.code})
                                                </option>
                                            ))}
                                        </select>

                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            placeholder="Enter phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Message</label>
                                    <textarea
                                        rows={4}
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 mt-3"
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Get in touch'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Stats />
            <Maps />
        </>
    )
}

export default page
