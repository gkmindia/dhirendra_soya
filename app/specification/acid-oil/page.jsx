import AcidOil from '@/components/products/AcidOil'
import Stats from '@/components/Stats'
import Link from 'next/link'

export function generateMetadata() {
    return {
        title: "Acid Oil Our Products | Dhirendra Soya",
        description: "Explore our wide range of sustainable agricultural products designed to enhance productivity and support farmers across regions.",
    };
}

const page = () => {
    return (
        <>
            <div className='container mt-4 pb-5'>
                <AcidOil />
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
                                            <h2 className='mb-0 fw-bold fs-4 mb-1 text-primary'>Product: Non-GMO Soya Crude Oil (Finished Good)</h2>
                                            (Appearance: Deep Yellow Liquid)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Free fatty acid</td>
                                        <td>%</td>
                                        <td>{'<1.50'}</td>
                                        <td className='text-nowrap'>AOCS Ca 5a-40.</td>
                                    </tr>
                                    <tr>
                                        <td>Colour</td>
                                        <td>Unit</td>
                                        <td>40 Max</td>
                                        <td className='text-nowrap'>IS:548(Part-I)1964*</td>
                                    </tr>
                                    <tr>
                                        <td>M&V</td>
                                        <td>%</td>
                                        <td>{'<0.25'}</td>
                                        <td className='text-nowrap'>IS:548(Part-1)1964</td>
                                    </tr>
                                    <tr>
                                        <td>Moisture, Impurities & volatiles (MIV)</td>
                                        <td>%</td>
                                        <td>{'<0.5'}</td>
                                        <td className='text-nowrap'>IS:548(Part-1)1964</td>
                                    </tr>
                                    <tr>
                                        <td>Sediment</td>
                                        <td>%</td>
                                        <td>{'<0.25'}</td>
                                        <td className='text-nowrap'>IS:548(Part-1)1964</td>
                                    </tr>
                                    <tr>
                                        <td>Phosphorous Content</td>
                                        <td>ppm</td>
                                        <td>{'>800'}</td>
                                        <td className='text-nowrap'>IS:548(Part-1)1964</td>
                                    </tr>
                                    <tr>
                                        <td>Flash Point</td>
                                        <td>°C</td>
                                        <td>120°C</td>
                                        <td className='text-nowrap'>P:21(1960) of IS:1448</td>
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
                                        <td>Non-GMO Soybean Seeds</td>
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
                                        <td>6 months from the date of manufacture</td>
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
                                        <td>Soybean Crude oil is a potential allergen and may cause allergic reaction.</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>Intended use and potential abuse (No specific distribution condition)</td>
                                        <td>
                                            Soya Crude oil consumed as cooking oil, manufacturing Lecithin and Refined Oil. <br />
                                            Soya Crude Oil is Non-Hazardous product, but It may cause health risk if consumed in excess.
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
