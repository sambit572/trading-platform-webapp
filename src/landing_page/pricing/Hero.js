import React from 'react';

function Hero() {
    return ( 
        <div className='container'>

            {/* HEADER SECTION */}
            <div 
                className='row border-bottom p-5 mt-5 text-center rounded-4 shadow-lg'
                style={{
                    background: "linear-gradient(135deg, #ffffff, #e8f0ff)",
                    transition:"0.4s",
                    transform:"perspective(1000px)",
                }}
                onMouseEnter={(e)=>{ e.currentTarget.style.transform = "scale(1.02) perspective(1000px)" }}
                onMouseLeave={(e)=>{ e.currentTarget.style.transform = "scale(1) perspective(1000px)" }}
            >
                <h1 
                    className='fw-bold'
                    style={{
                        background:"linear-gradient(90deg, #007bff, #00eaff)",
                        WebkitBackgroundClip:"text",
                        color:"transparent",
                        fontSize:"3rem",
                        textShadow:"0 0 10px rgba(0, 200, 255, .5)"
                    }}
                >
                    Pricing
                </h1>

                {/* SHIMMER TEXT */}
                <h3 
                    className='text-muted mt-3 fs-5'
                    style={{
                        position:"relative",
                        overflow:"hidden",
                        display:"inline-block"
                    }}
                >
                    <span
                        style={{
                            background:"linear-gradient(90deg, #888, #bbb, #888)",
                            WebkitBackgroundClip:"text",
                            color:"transparent",
                            animation:"shimmer 2s infinite",
                        }}
                    >
                        Free equality investment and flat 20 traday and F&O trades
                    </span>
                </h3>
            </div>

            {/* BODY CARDS */}
            <div className='row p-5 text-center mt-5'>

                {/* CARD 1 */}
                <div 
                    className='col-4 p-4 rounded-4 shadow'
                    style={{
                        background:"rgba(255,255,255,0.4)",
                        backdropFilter:"blur(12px)",
                        border:"1px solid rgba(255,255,255,0.5)",
                        transition:"0.3s"
                    }}
                    onMouseEnter={(e)=>{ 
                        e.currentTarget.style.transform="translateY(-8px) scale(1.03)";
                        e.currentTarget.style.boxShadow="0 10px 30px rgba(0,255,255,0.4)";
                        e.currentTarget.style.border="1px solid rgba(0,255,255,0.7)";
                    }}
                    onMouseLeave={(e)=>{ 
                        e.currentTarget.style.transform="translateY(0px) scale(1)";
                        e.currentTarget.style.boxShadow="0 5px 15px rgba(0,0,0,0.1)";
                        e.currentTarget.style.border="1px solid rgba(255,255,255,0.5)";
                    }}
                >
                    <img src="media/images/pricingEquity.svg"/>
                    <h1 
                        className='fs-3 mt-3'
                        style={{
                            color:"#00eaff",
                            textShadow:"0 0 10px #00eaff"
                        }}
                    >
                        Free equity delivery
                    </h1>
                    <p className='text-muted'>
                        All equity delivery investments (NSE,BSE), are absolutely free- 0 brokerage
                    </p>
                </div>

                {/* CARD 2 */}
                <div 
                    className='col-4 p-4 rounded-4 shadow'
                    style={{
                        background:"rgba(255,255,255,0.4)",
                        backdropFilter:"blur(12px)",
                        border:"1px solid rgba(255,255,255,0.5)",
                        transition:"0.3s"
                    }}
                    onMouseEnter={(e)=>{ 
                        e.currentTarget.style.transform="translateY(-8px) scale(1.03)";
                        e.currentTarget.style.boxShadow="0 10px 30px rgba(255,0,200,0.4)";
                        e.currentTarget.style.border="1px solid rgba(255,0,200,0.7)";
                    }}
                    onMouseLeave={(e)=>{ 
                        e.currentTarget.style.transform="translateY(0px) scale(1)";
                        e.currentTarget.style.boxShadow="0 5px 15px rgba(0,0,0,0.1)";
                        e.currentTarget.style.border="1px solid rgba(255,255,255,0.5)";
                    }}
                >
                    <img src="media/images/intradayTrades.svg"/>
                    <h1 
                        className='fs-3 mt-3'
                        style={{
                            color:"#ff00ee",
                            textShadow:"0 0 10px #ff00ee"
                        }}
                    >
                        Intraday and F&O trades
                    </h1>
                    <p className='text-muted'>
                        Flat Rs. 20 or 0.03% (whichever is lower) per executed order...
                    </p>
                </div>

                {/* CARD 3 */}
                <div 
                    className='col-4 p-4 rounded-4 shadow'
                    style={{
                        background:"rgba(255,255,255,0.4)",
                        backdropFilter:"blur(12px)",
                        border:"1px solid rgba(255,255,255,0.5)",
                        transition:"0.3s"
                    }}
                    onMouseEnter={(e)=>{ 
                        e.currentTarget.style.transform="translateY(-8px) scale(1.03)";
                        e.currentTarget.style.boxShadow="0 10px 30px rgba(0,200,255,0.4)";
                        e.currentTarget.style.border="1px solid rgba(0,200,255,0.7)";
                    }}
                    onMouseLeave={(e)=>{ 
                        e.currentTarget.style.transform="translateY(0px) scale(1)";
                        e.currentTarget.style.boxShadow="0 5px 15px rgba(0,0,0,0.1)";
                        e.currentTarget.style.border="1px solid rgba(255,255,255,0.5)";
                    }}
                >
                    <img src="media/images/pricingEquity.svg"/>
                    <h1 
                        className='fs-3 mt-3'
                        style={{
                            color:"#00c8ff",
                            textShadow:"0 0 10px #00c8ff"
                        }}
                    >
                        Free direct MF
                    </h1>
                    <p className='text-muted'>
                        All direct mutual fund investments are absolutely free...
                    </p>
                </div>

            </div>
        </div>
     );
}

export default Hero;
