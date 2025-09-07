import React from 'react'

const AcidOil = () => {
    return (
        <div className="row g-4 align-items-center">
            <div className="col-lg-7">
                <img src="/images/products/soya_acid_oil.jpg" className='img-fluid' />
            </div>
            <div className="col-lg-5 ps-lg-5">
                <h1 className="title_one">Acid Oil</h1>
                <p>Acid oil, which is a by-product in vegetable oil refining, mainly contains free fatty acids (FFAs) and acylglycerols, and is a candidate of materials for production of biodiesel fuel.</p>
            </div>
            <div className="col-12 mt-4">
                <div className="d-flex flex-column gap-3">
                    <p className="mb-0">Acid Oil is an important item which is used for soap making industries. In majority of the cases, the acid oil is derived from the byproduct of the refining process which is soap stock.</p>
                    <div>
                        <h6 className='fw-bold text-dark'>Key Characteristics of Acid Oil:</h6>
                        <ul className='ps-3 mb-0'>
                            <li>Color: Typically dark brown to black, depending on the feedstock and processing.</li>
                            <li>Odor: Characteristic pungent smell due to residual sulfur and other impurities.</li>
                            <li>FFA Content: High free fatty acid content, often greater than 60%, making it ideal for soap-making.</li>
                            <li>Moisture & Impurities: Varies based on refining process and storage conditions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcidOil
