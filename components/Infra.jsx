import Image from "next/image";

export default function Infra() {

    return (
        <>
            <div className="container">

                <div className="border-bottom-primary pb-5 mb-4 mb-xl-6">
                <div className="row align-items-end g-4">
                    <div className="col-12 col-xl-7 pr-xxl-6">
                        <div className="text-uppercase pb-1"><i className="bi bi-circle-fill text-primary me-2"></i>Industries Solutions</div>
                        <h2 className="h1 mb-0">Dhirendra Soya Agro Pvt. Ltd. Infrastructure</h2>
                    </div>
                    <div className="col-12 col-xl-5">
                        <p className="m-0">We have a technically advanced manufacturing unit with modern technology. The manufacturing unit is well equipped with high end latest machinery.</p>
                        <p>“Quality infrastructure propels growth. It connects people, brightens their lives and brings India closer to the world.”</p>
                        <i>– Prime Minister Narendra Modi</i>
                    </div>
                </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="item">
                            <div className="row g-3">
                                <div className="col-lg-7">
                                    <div className="industry-card">
                                        <Image 
                                            src="/images/infra/ro-unit-1.jpg" 
                                            alt="ro unit"
                                            fill
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="industry-card">
                                        <Image 
                                            src="/images/infra/ro-unit-2.jpg" 
                                            alt="ro unit"
                                            fill
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="d-flex align-items-center gap-2 gap-md-5 flex-wrap flex-md-nowrap border p-4">
                                    <h5 className="mb-2 title_two text-nowrap">RO Unit</h5>
                                    <div className="title_description">RO uses a partially permeable membrane to eliminate unwanted ions, molecules, and larger particles from water. By removing up to 98% of the impurities and dissolved solids, you can reduce the conductivity of the boiler makeup water from 700 uS to 14–35 uS.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="item">
                                <div className="row g-3">
                                    <div className="col-lg-6">
                                        <div className="industry-card">
                                            <Image 
                                                src="/images/infra/power-house-1.jpg" 
                                                alt="ro unit"
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="industry-card">
                                            <Image 
                                                src="/images/infra/power-house-2.jpg" 
                                                alt="ro unit"
                                                fill
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="d-flex align-items-center gap-2 gap-md-5 flex-wrap flex-md-nowrap border p-4">
                                        <h5 className="mb-2 title_two text-nowrap">Power House</h5>
                                        <div className="title_description">We use Steam Boiler to produce steam for powering turbines and pumps or for heating of facilities and processes.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="item">
                                <div className="row g-3">
                                    <div className="col-lg-5">
                                        <div className="industry-card">
                                            <Image 
                                                src="/images/infra/oil-doc-1.jpg" 
                                                alt="ro unit"
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="industry-card">
                                            <Image 
                                                src="/images/infra/oil-doc-2.jpg" 
                                                alt="ro unit"
                                                fill
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="d-flex align-items-center gap-2 gap-lg-5 flex-wrap flex-lg-nowrap border p-4">
                                        <h5 className="mb-2 title_two" style={{maxWidth:"300px"}}>Crude Oil and DOC sepration unit</h5>
                                        <div className="title_description">In the distillation unit at different temperatures crude oil & hexane get separated. Soya crude oil is further refined and after removal of impurities, the same is made fit for human consumption.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="item">
                                <div className="row g-3">
                                    <div className="col-lg-6">
                                        <div className="industry-card">
                                            <Image 
                                                src="/images/infra/oil-refinery-1.jpg" 
                                                alt="ro unit"
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="industry-card">
                                            <Image 
                                                src="/images/infra/oil-refinery-2.jpg" 
                                                alt="ro unit"
                                                fill
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="d-flex align-items-center gap-2 gap-md-5 flex-wrap flex-md-nowrap border p-4">
                                        <h5 className="mb-2 title_two text-nowrap">Oil Refinery</h5>
                                        <div className="title_description">In Oil Refinery we refine crude oil into edible oil by various process —from degumming, neutralization and dewaxing through to bleaching, deodorizing and GE and 3-MCPD mitigation.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
