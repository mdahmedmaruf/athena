import React from 'react';


const packageData = [
    {
        price: "$199",
        criteria: "For Basic",
        innerpage: "No Inner Page",
        free: "10 Days Free Support"
    },
    {
        price: "$399",
        criteria: "For Preferred",
        innerpage: "4 Inner Pages",
        free: "20 Days Free Support"
    },
    {
        price: "$599",
        criteria: "For Elite",
        innerpage: "8 Inner Pagess",
        free: "30 Days Free Support"
    }

];

const Packages = () => {
    return (
        <div className="packages container mb-5">
            <div className="card-deck">
                {
                    packageData.map((item, index) =>
                        <div key={index} className="card text-center px-2 py-4">
                            <div className="card-header bg-white border-0">
                                <h1 className="font-weight-bold">{item.price}</h1>
                                <p>{item.criteria}</p>
                                
                            <hr className="divider-line"></hr>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li className="text-secondary">Homepage</li>
                                    <li className="text-secondary">{item.innerpage}</li>
                                    <li className="text-secondary">Asset file</li>
                                    <li className="text-secondary">Source file</li>
                                    <li className="text-secondary">Free Stock Photos</li>
                                    <li className="text-secondary">{item.free}</li>
                                    <li className="text-secondary">24/7 Support</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-white border-0">
                                <button className="btn btn-custom">Order Now</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Packages;