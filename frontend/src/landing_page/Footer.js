import React from 'react';

function Footer() {
    return ( 
        <footer className="container border-top mt-5"style={{backgroundColor:"rgb(240,240,240)"}}>
        <div >
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/images/logo.svg" style={{width:"40%"}}alt='Logo'/>
                    <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved</p>
                </div>
                <div className='col'>
                    <p className='mb-1'>Company</p>
                    <a href=''>About</a>
                    <br /><br />
                    <a href=''>Product</a>
                    <br /><br />
                    <a href=''>Pricing</a>
                    <br /><br />
                    <a href=''>Referral programme</a>
                    <br /><br />
                    <a href=''>Careers</a>
                    <br /><br />
                    <a href=''>Zerodha.tech</a>
                    <br /><br />
                    <a href=''>Press & media</a>
                    <br /><br />
                    <a href=''>Zerodha cares (CSR)</a>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href=''>Content</a>
                    <br />
                    <br />
                    <a href=''>Support portal</a>
                    <br />
                    <br />
                    <a href=''>Z-Connect blog</a>
                    <br />
                    <br />
                    <a href=''>Referral programme</a>
                    <br />
                    <br />
                    <a href=''>List of Charges</a>
                    <br />
                    <br />
                    <a href=''>Downloads & Charges</a>
                </div>
                <div className='col'> 
                    <p>Account</p>
                    <a href=''>Open an account</a>
                    <br />
                    <br />
                    <a href=''>fund transfer</a>
                    <br />
                    <br />
                    <a href=''>60 day challeng</a>
                </div>
            </div>
            <div className='mt-5 text-small text-muted'> 
                <p>
                    Zerodha Breaking Ltd.; Member of NSE & BSE - SEBI Registration no.: INZ0000316333 CDSL: Depository services Zerodha Securities Pvt. Ltd - SEBI Registration no.:IN-DP-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025- SEBI Registration no.:INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.For any complaints pertaining to Securities broking please write to complaints@Zerodha.com, for DP related to dp@Zerodha.com. please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p>
                    Procedure to file a complaint on SEBI SCROES: Registere on SCROES portal,Mandetory details for filing complaints on SCORES:Name, PAN,Address, Mobile Number,E-mail ID,Benefits:Effective Communication ,Speedy redressal of the grievances
                </p>
                <p>
                    Investment in Securities market are subject to market risks;read all the related documents carefully before investing
                </p>
                <p>
                    "Prevent unauthorized transaction in your account.Update your with your stock brokers.Revive information of your transaction"
                </p>
            </div>   
        </div>
        </footer>
     );
}

export default Footer;