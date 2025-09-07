import React from 'react'

const Maps = () => {
    return (
        <div style={{height:"500px"}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19073.49505263249!2d74.91285164808998!3d24.395436359034335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396677214fa825c3%3A0x4564dd70dddb6061!2sDhirendra%20Soya%20Agro!5e0!3m2!1sen!2sin!4v1753554313413!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dhirendra Soya Agro Pvt. Ltd. Location"
                ></iframe>
        </div>
    )
}

export default Maps
