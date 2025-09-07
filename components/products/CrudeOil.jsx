import React from 'react'

const CrudeOil = () => {
    return (
        <div className="row g-4 align-items-center">
            <div className="col-lg-5 pe-lg-5">
                <h1 className="title_one">Crude Soybean Oil</h1>
                <p>Crude soybean oil is oil extracted from soybean flakes with mixed hexanes. The solvent is removed to produce the initial crude oil.</p>
            </div>
            <div className="col-lg-7">
                <img src="/images/products/soya_crude_oil.jpg" className='img-fluid' />
            </div>
            <div className="col-12 mt-4">
                <div className="d-flex flex-column gap-3">
                    <p className="mb-0">Crude Degummed Soybean Oil is predominantly used in human nutrition after refining and hydrogenation, in form of oil and vegetable fat and margarine. They provide the body with the essential fatty acids, fat soluble vitamins, they are an important source of energy and serve as one of the major components of cell walls.</p>
                </div>
            </div>
        </div>
    )
}

export default CrudeOil
