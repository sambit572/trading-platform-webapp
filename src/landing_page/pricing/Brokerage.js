import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div 
                className='row text-center p-5 mt-5 rounded-4 border-top shadow-lg'
                style={{
                    background: "rgba(255, 255, 255, 0.6)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                    transition: "0.4s ease",
                    transform: "perspective(1200px)",
                }}
                onMouseEnter={(e)=>{ 
                    e.currentTarget.style.transform = "scale(1.03) perspective(1200px) rotateX(1deg)";
                }}
                onMouseLeave={(e)=>{ 
                    e.currentTarget.style.transform = "scale(1) perspective(1200px) rotateX(0deg)";
                }}
            >

                {/* LEFT COLUMN */}
                <div 
                    className='col-8 p-4 rounded-4 shadow'
                    style={{
                        background: "rgba(240, 245, 255, 0.7)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        transition: "0.35s ease"
                    }}
                    onMouseEnter={(e)=>{ 
                        e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
                        e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e)=>{ 
                        e.currentTarget.style.transform = "translateY(0px) scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.10)";
                    }}
                >
                    <a href='' style={{textDecoration:"none"}}>
                        <h3 
                            className='fs-5 fw-bold' 
                            style={{ 
                                color: "#0044cc",
                                letterSpacing: "0.5px",
                                transition: "0.3s"
                            }}
                            onMouseEnter={(e)=> e.currentTarget.style.color = "#001f66" }
                            onMouseLeave={(e)=> e.currentTarget.style.color = "#0044cc" }
                        >
                            Brokerage calculator
                        </h3>
                    </a>

                    <ul style={{textAlign:"left", lineHeight:"1.9"}}>
                       <li className='text-muted'>Call & Trade and RMS auto-squareoff:Additional charges of 50 + GST per order.</li> 
                       <li className='text-muted'>Digital contract notes will be sent via e-mail.</li>
                       <li className='text-muted'>Physical copies of contract notes, if required, shall be charged 20 per contract note.Courier charges apply</li>
                       <li className='text-muted'>For NRI account (non-PIS), 0.5% or 100 per executed order for equity (whichever is lower)</li>
                       <li className='text-muted'>For NRI account (non-PIS), 0.5% or 200 per executed order for equity (whichever is lower)</li>
                       <li className='text-muted'>If the account is in debit balance, any order placed will be charged 40 per executed order instead of 20 per executed order</li>
                    </ul>
                </div>


                {/* RIGHT COLUMN */}
                <div 
                    className='col-4 p-4 rounded-4 shadow d-flex align-items-center justify-content-center'
                    style={{
                        background: "rgba(240, 245, 255, 0.7)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        transition: "0.35s ease"
                    }}
                    onMouseEnter={(e)=>{ 
                        e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e)=>{ 
                        e.currentTarget.style.transform = "translateY(0px) scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.10)";
                    }}
                >
                    <a href='' style={{textDecoration:"none"}}>
                        <h3 
                            className='fs-5 fw-bold' 
                            style={{ 
                                color: "#0044cc",
                                letterSpacing: "0.5px",
                                transition: "0.3s"
                            }}
                            onMouseEnter={(e)=> e.currentTarget.style.color = "#001f66" }
                            onMouseLeave={(e)=> e.currentTarget.style.color = "#0044cc" }
                        >
                            List of charges
                        </h3>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;
