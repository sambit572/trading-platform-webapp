import React from "react";

function Universe(){
    return(
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className="text-small text-muted">Insurance</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className="text-small text-muted">Options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/goldenpiLogo.png"/>
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/zerodhaFundhouse.png"/>
                    <p className="text-small text-muted"></p>
                </div>
                <button className="btn btn-primary fs-5 mb-5 p-2 " style={{width:"20%", margin:"0 auto"}}>
                    Sign Up Now
                </button>
            </div>
        </div>
    )
}

export default Universe;