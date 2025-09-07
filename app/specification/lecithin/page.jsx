import Lecithin from '@/components/products/Lecithin'
import Stats from '@/components/Stats'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className='container mt-4 pb-5'>
                <Lecithin />
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
                                            <h2 className='mb-0 fw-bold fs-4 mb-1 text-primary'>Product: NON-GMO Soya Lecithin (E-322) (Food Grade)</h2>
                                            (Appearance: Clear amber colored, semi viscous liquid)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Moisture</td>
                                        <td>%</td>
                                        <td>1.0 % Max.</td>
                                        <td>AOCS 6TH EDN.ja 2b-87(09)</td>
                                    </tr>
                                    <tr>
                                        <td>Acid Value</td>
                                        <td>mg KOH/g</td>
                                        <td>30 mg KOH/g Max.</td>
                                        <td>AOCS 6TH EDN.ja 6-55(11)</td>
                                    </tr>
                                    <tr>
                                        <td>Acetone Insoluble</td>
                                        <td>%</td>
                                        <td>62.0 % Min.</td>
                                        <td>AOCS 6TH EDN.ja 4-46(11)</td>
                                    </tr>
                                    <tr>
                                        <td>Benzene /Toluene Insoluble</td>
                                        <td>%</td>
                                        <td>0.30% Max.</td>
                                        <td>AOCS 6TH EDN.ja 3-87(09)</td>
                                    </tr>
                                    <tr>
                                        <td>Peroxide value</td>
                                        <td>Meq/kg</td>
                                        <td>5.0 (Meq/kg) Max</td>
                                        <td>AOCS 6TH EDN.ja 8-87(11)</td>
                                    </tr>
                                    <tr>
                                        <td>Color Value, (Gardner scale)</td>
                                        <td>Unit</td>
                                        <td>12.0 Max.</td>
                                        <td>AOCS 6TH EDN.ja 9-87(09)</td>
                                    </tr>
                                    <tr>
                                        <td>Viscosity at 250C</td>
                                        <td>Poise</td>
                                        <td>120 Max</td>
                                        <td>AOCS 6TH EDN.ja 10-87(09)</td>
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
                                        <td>100 % soyabean Seed</td>
                                    </tr>
                                    <tr>
                                        <td>B</td>
                                        <td>Preservation factor</td>
                                        <td>Keep/ store in dry place</td>
                                    </tr>
                                    <tr>
                                        <td>C</td>
                                        <td>Storage factor</td>
                                        <td>Store in dry place at ambient temperature.</td>
                                    </tr>
                                    <tr>
                                        <td>D</td>
                                        <td>Customer Information</td>
                                        <td>Keep in a cool & dry Place,away from sunlight</td>
                                    </tr>
                                    <tr>
                                        <td>E</td>
                                        <td>Shelf life</td>
                                        <td>18 months from the date of manufacture.</td>
                                    </tr>
                                    <tr>
                                        <td>F</td>
                                        <td>Packing</td>
                                        <td>
                                            HDPE Drums (bunk hole/open top) with net weight 210/ 220/240KG <br />
                                            MS drums (epoxy coated) with net weight 210 KG <br />
                                            IBC with net weight 1000 KG <br />
                                            ISO tanker 22000 KG
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>G</td>
                                        <td>Labeling Details</td>
                                        <td>
                                            Product Name, Batch number, Date of Manufacturing, PO No. &Date, Date of Expiry, Gross Weight, Tare Weight, Net weight, Name & address of manufacturer. FSSAI No.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>H</td>
                                        <td>Regulatory requirement</td>
                                        <td>As per current FSSAI Act 2006</td>
                                    </tr>
                                    <tr>
                                        <td>I</td>
                                        <td>Allergen Information</td>
                                        <td>Soyabean seed used for producing of Soya Lecithin, no other ingredient /allergen is to be use in the production of Soy lecithin</td>
                                    </tr>
                                    <tr>
                                        <td>J</td>
                                        <td>Certificates</td>
                                        <td>ISO 9001:2015, FSSC 22000, Kosher, Halal, Food Chain ID (Non-GMO)</td>
                                    </tr>
                                    <tr>
                                        <td>K</td>
                                        <td>Intended use and potential abuse (No specific distribution condition)</td>
                                        <td>
                                            Soya Lecithin is also used as an emulsifier, Viscosity stabilizer, Binding Agent etc.
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
