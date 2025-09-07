import SoyaOil from '@/components/products/SoyaOil'
import Stats from '@/components/Stats'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className='container mt-4 pb-5'>
                <SoyaOil />
                <div className="row mt-4">
                    <div className="col-lg-8 offset-lg-2 mt-4">
                        <h2 className="title_two text-center mb-4">Product Specification</h2>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr className='table-success'>
                                        <th className='text-nowrap' scope="col">Parameter Perticular</th>
                                        <th className='text-nowrap' scope="col">M. Unit</th>
                                        <th scope="col">Standard Specification</th>
                                        <th className='text-nowrap' scope="col">Analysis Method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-center py-3' colSpan={4}>
                                            <h2 className='mb-0 fw-bold fs-4 mb-1 text-primary'>Product: NON-GMO Soybean Refined Oil (Finished Good)</h2>
                                            (Appearance: Clear Pale-Yellow Viscous Liquid)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Free fatty acid</td>
                                        <td>%</td>
                                        <td>0.05 Max</td>
                                        <td className='text-nowrap'>AOCS Ca 5a-40.</td>
                                    </tr>
                                    <tr>
                                        <td>Peroxide Value</td>
                                        <td>mEq/O2/Kg</td>
                                        <td>1 Max</td>
                                        <td className='text-nowrap'>AOCS 6thEDN.ja 8-87(11)</td>
                                    </tr>
                                    <tr>
                                        <td>Refractive Index at 40°C</td>
                                        <td>-</td>
                                        <td>1.465 to 1.471</td>
                                        <td className='text-nowrap'>IS:548(Part-I)1964*</td>
                                    </tr>
                                    <tr>
                                        <td>Colour</td>
                                        <td>Unit</td>
                                        <td>11 Max</td>
                                        <td className='text-nowrap'>IS:548(Part-I)1964*</td>
                                    </tr>
                                    <tr>
                                        <td className='text-nowrap'>Acid value</td>
                                        <td>Mg/KOH</td>
                                        <td>0.1 Max</td>
                                        <td className='text-nowrap'>IS:548(Part-I)1964*</td>
                                    </tr>
                                    <tr>
                                        <td>Saponification Value</td>
                                        <td>Mg/KOH/gm</td>
                                        <td>189-195</td>
                                        <td className='text-nowrap'>IS:548(Part-I) 1964(reaffirmed 2010)</td>
                                    </tr>
                                    <tr>
                                        <td>Flash point</td>
                                        <td>°C</td>
                                        <td>260°C</td>
                                        <td>P:21(1960) of IS:1448</td>
                                    </tr>
                                    <tr>
                                        <td>Moisture & insoluble volatile</td>
                                        <td>%</td>
                                        <td>0.05 Max</td>
                                        <td className='text-nowrap'>IS:548(Part-1)1964</td>
                                    </tr>
                                    <tr>
                                        <td>Unsaponifiable Matter</td>
                                        <td>%</td>
                                        <td>1.0 Max</td>
                                        <td className='text-nowrap'>IS:548(Part-I)1964*</td>
                                    </tr>
                                    <tr>
                                        <td>Iodine Value (Wij’s Method)</td>
                                        <td>IV</td>
                                        <td>120-140</td>
                                        <td className='text-nowrap'>IS:548(Part-1)1964</td>
                                    </tr>
                                    <tr>
                                        <td>Phosphorous Content</td>
                                        <td>ppm</td>
                                        <td>5.0 Max</td>
                                        <td className='text-nowrap'>IS:548 (Part-1)1964</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h2 className="title_two text-center mb-4 mt-5">Other Description of Product</h2>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <td>A</td>
                                        <td>Ingredients</td>
                                        <td>Non-GMO Soybean Crude Oil, Vitamin A&D</td>
                                    </tr>
                                    <tr>
                                        <td>B</td>
                                        <td>Origin</td>
                                        <td>Indian Origin</td>
                                    </tr>
                                    <tr>
                                        <td>C</td>
                                        <td>Preservation factor</td>
                                        <td>Keep/store in dry place</td>
                                    </tr>
                                    <tr>
                                        <td>D</td>
                                        <td>Storage factor</td>
                                        <td>Store in cool & dry place at ambient temperature, water proof, protect against direct sunlight, rain & dust.</td>
                                    </tr>
                                    <tr>
                                        <td>E</td>
                                        <td>Shelf life</td>
                                        <td>9 months from the date of manufacture</td>
                                    </tr>
                                    <tr>
                                        <td>F</td>
                                        <td>Packing</td>
                                        <td>
                                            <div>a. ISO Container 20 MT</div>
                                            <div>b. Flexi Container 20MT</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>G</td>
                                        <td>Labeling Details</td>
                                        <td>Product Name, Batch number, Date of production, best before, Net weight, Name & address of manufacturer.</td>
                                    </tr>
                                    <tr>
                                        <td>H</td>
                                        <td>Regulatory requirement</td>
                                        <td>As per current FSSAI Act 2006</td>
                                    </tr>
                                    <tr>
                                        <td>I</td>
                                        <td>GMO Contamination</td>
                                        <td>Negative</td>
                                    </tr>
                                    <tr>
                                        <td>J</td>
                                        <td>Certificates</td>
                                        <td>ISO 9001:2015, FSSC 22000, FOOD Chain-ID (Non-GMO), Kosher, Halal</td>
                                    </tr>
                                    <tr>
                                        <td>K</td>
                                        <td>Allergen Information</td>
                                        <td>Refined Soybean Oil is a Potential allergen and may cause the allergic reaction.</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>Intended use and potential abuse (No specific distribution condition)</td>
                                        <td>
                                            Intended use and potential abuse (No specific distribution condition)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center mt-4">
                            <Link href="/get-in-touch" className="btn btn-primary">Get in touch<i className="bi bi-arrow-right ms-2"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Stats />
        </>
    )
}

export default page
