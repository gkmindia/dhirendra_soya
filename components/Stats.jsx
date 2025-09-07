import React from "react";

const Stats = () => {
    return (
        <section className="bg-secondary2">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 stats">
                <div className="col text-center py-4">
                    <h4 className="title_two text-white mb-2">
                    600<span className="text-primary">T</span>
                    </h4>
                    <span>Per Day Intake Capacity</span>
                </div>
                <div className="col text-center py-4">
                    <h4 className="title_two text-white mb-2">
                    6<span className="text-primary">T</span>
                    </h4>
                    <span>Lecithn per 600T Soybean</span>
                </div>
                <div className="col text-center py-4">
                    <h4 className="title_two text-white mb-2">
                    95<span className="text-primary">mT</span>
                    </h4>
                    <span>Refined Soybean Oil</span>
                </div>
                <div className="col text-center py-4">
                    <h4 className="title_two text-white mb-2">
                    105<span className="text-primary">mT</span>
                    </h4>
                    <span>Crude Soybean Oil per 600T</span>
                </div>
                <div className="col text-center py-4">
                    <h4 className="title_two text-white mb-2">
                    495<span className="text-primary">mT</span>
                    </h4>
                    <span>Soybean DOC per 600T</span>
                </div>
            </div>
        </section>
    );
};

export default Stats;
