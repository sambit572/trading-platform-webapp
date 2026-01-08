import React from "react";

function RightSection({productName,productDescription,learnMore,imageURL}){
    return(
        <div 
            className="container mb-5" 
            style={{
                padding: "60px 20px",
                background: "linear-gradient(135deg, #f8f9fa, #eef1f6)",
                borderRadius: "20px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
            }}
        >
            <div className="row align-items-center">
                <div className="col-6 p-5 mt-5" style={{color:"#333"}}>
                    <h1 
                        style={{
                            fontSize:"40px",
                            fontWeight:"700",
                            marginBottom:"20px"
                        }}
                    >
                        {productName}
                    </h1>

                    <p 
                        style={{
                            fontSize:"18px",
                            lineHeight:"1.6",
                            opacity:"0.8",
                            marginBottom:"30px"
                        }}
                    >
                        {productDescription}
                    </p>

                    <div className="mb-3">
                        <a 
                            href={learnMore} 
                            style={{
                                padding:"10px 20px",
                                background:"#1cc88a",
                                color:"white",
                                borderRadius:"10px",
                                textDecoration:"none",
                                transition:"0.3s"
                            }}
                            onMouseOver={e => e.target.style.opacity = "0.8"}
                            onMouseOut={e => e.target.style.opacity = "1"}
                        >
                            Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="col-6 p-5" style={{textAlign:"center"}}>
                    <img 
                        src={imageURL} 
                        style={{
                            width:"90%",
                            borderRadius:"20px",
                            boxShadow:"0 4px 20px rgba(0,0,0,0.15)",
                            transition:"transform 0.3s"
                        }}
                        onMouseOver={e => e.target.style.transform = "scale(1.05)"}
                        onMouseOut={e => e.target.style.transform = "scale(1)"}
                    />
                </div>
            </div>
        </div>
    )
}

export default RightSection;