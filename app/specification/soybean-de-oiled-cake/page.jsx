import SoyaDoc from '@/components/products/SoyaDoc'
import Stats from '@/components/Stats'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className='container mt-4 pb-5'>
                <SoyaDoc />
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
                                            <h2 className='mb-0 fw-bold fs-4 mb-1 text-primary'>Product: SOYABEAN MEAL Hi Pro</h2>
                                            (Appearance: Light Yellow Color Balls and grits)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Moisture</td>
                                        <td>%</td>
                                        <td>11.50% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:2:1-2014</td>
                                    </tr>
                                    <tr>
                                        <td>Protein</td>
                                        <td>%</td>
                                        <td>50.00% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:4:1-2014</td>
                                    </tr>
                                    <tr>
                                        <td>Fiber</td>
                                        <td>%</td>
                                        <td>4.00% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:9:0-2014</td>
                                    </tr>
                                    <tr>
                                        <td>Total Ash</td>
                                        <td>%</td>
                                        <td>7.00% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:11:0-2014</td>
                                    </tr>
                                    <tr>
                                        <td>Acid Insoluble Ash</td>
                                        <td>%</td>
                                        <td>1.00% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:12:0-2014</td>
                                    </tr>
                                    <tr>
                                        <td>Urease Activity</td>
                                        <td>Mgn</td>
                                        <td>0.10% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:22:0-2014</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center py-3' colSpan={4}>
                                            <h2 className='mb-0 fw-bold fs-4 mb-1 text-primary'>Product: SOYABEAN MEAL 48%</h2>
                                            (Appearance: Light Yellow Color Balls and grits)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Moisture</td>
                                        <td>%</td>
                                        <td>12.00% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:2:1-2014</td>
                                    </tr>
                                    <tr>
                                        <td>Protein</td>
                                        <td>%</td>
                                        <td>48.00% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:4:1-2014</td>
                                    </tr>
                                    <tr>
                                        <td>Fiber</td>
                                        <td>%</td>
                                        <td>5.00% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:9:0-2014</td>
                                    </tr>
                                    <tr>
                                        <td>Total Ash</td>
                                        <td>%</td>
                                        <td>7.00% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:11:0-2014</td>
                                    </tr>
                                    <tr>
                                        <td>Acid Insoluble Ash</td>
                                        <td>%</td>
                                        <td>1.50% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:12:0-2014</td>
                                    </tr>
                                    <tr>
                                        <td>Urease Activity</td>
                                        <td>Mgn</td>
                                        <td>0.10% Max.</td>
                                        <td className='text-nowrap'>GAFTA 130:22:0-2014</td>
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
                                        <td>HDPE Bags with net weight 210/ 220/240KG</td>
                                    </tr>
                                    <tr>
                                        <td>G</td>
                                        <td>Labeling Details</td>
                                        <td>
                                            Product Name,<br/>
                                            Batch number,<br/>
                                            Date of Manufacturing,<br/>
                                            Date, Date of Expiry,<br/>
                                            Gross Weight,<br/>
                                            Name & address of manufacturer. FSSAI No.
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
                                        <td>Soyabean seed used for producing of Soyabean meal, no other ingredient /allergen is to be use in the production of Soybean Meal</td>
                                    </tr>
                                    <tr>
                                        <td>J</td>
                                        <td>Certificates</td>
                                        <td>ISO 9001:2015, FSSC 22000, GMP+B2 , K- Kosher, Halal (Under Process)</td>
                                    </tr>
                                    <tr>
                                        <td>K</td>
                                        <td>Intended use and potential abuse (No specific distribution condition)</td>
                                        <td>Soyabean Meal is also used as Feed and Food Ingredient.</td>
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
