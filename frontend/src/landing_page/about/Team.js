import React from 'react';

function Team() {
    return ( 
        <div className='container-fluid py-5'>
            {/* Header Section */}
            <div className='row justify-content-center mb-5'>
                <div className='col-12 text-center'>
                    <h1 className='display-4 fw-bold text-primary mb-3'>Our Leadership</h1>
                    <p className='lead text-muted'>Meet the visionaries driving India's financial revolution</p>
                </div>
            </div>

            {/* Team Member Section */}
            <div className='row justify-content-center align-items-stretch'>
                <div className='col-12 col-lg-8'>
                    <div className='card shadow-lg border-0 rounded-3 overflow-hidden'>
                        <div className='row g-0'>
                            {/* Image Column */}
                            <div className='col-12 col-md-5 bg-gradient-primary d-flex align-items-center justify-content-center p-5'>
                                <div className='text-center'>
                                    <img 
                                        src="media/images/nithinKamath.jpg" 
                                        className='img-fluid rounded-circle shadow-lg'
                                        style={{
                                            width: '280px',
                                            height: '280px',
                                            objectFit: 'cover',
                                            border: '5px solid rgba(255,255,255,0.2)'
                                        }}
                                        alt="Nithin Kamath - Founder & CEO"
                                    />
                                    <div className='mt-4'>
                                        <div className='d-flex justify-content-center gap-3'>
                                            <SocialLink href="/" label="Homepage" />
                                            <SocialLink href="#" label="TradingQnA" />
                                            <SocialLink href="#" label="Twitter" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Content Column */}
                            <div className='col-12 col-md-7 p-5 d-flex align-items-center'>
                                <div>
                                    <h2 className='h1 fw-bold text-dark mb-2'>Nithin Kamath</h2>
                                    <div className='badge bg-primary text-white fs-6 mb-4 px-3 py-2'>
                                        Founder & CEO
                                    </div>
                                    
                                    <div className='content-space' style={{lineHeight: '1.7'}}>
                                        <p className='text-muted mb-4 fs-5'>
                                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles 
                                            he faced during his decade-long stint as a trader. Today, Zerodha has 
                                            fundamentally changed the landscape of the Indian broking industry.
                                        </p>
                                        
                                        <div className='achievements mb-4'>
                                            <div className='d-flex align-items-center mb-3'>
                                                <div className='bg-light rounded-circle p-2 me-3'>
                                                    <span className='text-primary fw-bold'>✓</span>
                                                </div>
                                                <span className='text-dark'>
                                                    Member of SEBI Secondary Market Advisory Committee (SMAC)
                                                </span>
                                            </div>
                                            <div className='d-flex align-items-center mb-3'>
                                                <div className='bg-light rounded-circle p-2 me-3'>
                                                    <span className='text-primary fw-bold'>✓</span>
                                                </div>
                                                <span className='text-dark'>
                                                    Member of Market Data Advisory Committee (MDAC)
                                                </span>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <div className='bg-light rounded-circle p-2 me-3'>
                                                    <span className='text-primary fw-bold'>🏀</span>
                                                </div>
                                                <span className='text-dark'>
                                                    Playing basketball is his zen
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Team Stats */}
            <div className='row justify-content-center mt-5 pt-5'>
                <div className='col-12 col-lg-8'>
                    <div className='row text-center'>
                        <div className='col-4'>
                            <div className='border-end border-2'>
                                <div className='h3 fw-bold text-primary'>13+</div>
                                <div className='text-muted'>Years of Excellence</div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='border-end border-2'>
                                <div className='h3 fw-bold text-primary'>1Cr+</div>
                                <div className='text-muted'>Clients Trust</div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='h3 fw-bold text-primary'>15%</div>
                            <div className='text-muted'>Market Volume</div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bg-gradient-primary {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                
                .card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
                }
                
                .content-space p {
                    margin-bottom: 1.5rem;
                }
                
                @media (max-width: 768px) {
                    .border-end {
                        border-right: none !important;
                        border-bottom: 2px solid #dee2e6;
                        padding-bottom: 1rem;
                        margin-bottom: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}

// Social Link Component
function SocialLink({ href, label }) {
    return (
        <a 
            href={href} 
            className='btn btn-outline-light btn-sm rounded-pill px-3'
            style={{
                textDecoration: 'none',
                transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
            }}
        >
            {label}
        </a>
    );
}

export default Team;  