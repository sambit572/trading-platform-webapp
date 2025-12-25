import React from 'react';

function Hero() {
    const styles = {
        gradientBg: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '6rem 0'
        },
        statsContainer: {
            animation: 'fadeInUp 1s ease-in-out'
        },
        contentText: {
            lineHeight: '1.8',
            fontSize: '1.1em'
        },
        rightColumn: {
            borderLeft: '3px solid #e9ecef',
            paddingLeft: '2rem'
        },
        rightColumnMobile: {
            borderLeft: 'none',
            borderTop: '3px solid #e9ecef',
            paddingTop: '2rem',
            marginTop: '2rem',
            paddingLeft: '0'
        }
    };

    return ( 
        <div className='container-fluid'>
            {/* Main Hero Section */}
            <div className='row py-8 mb-8' style={styles.gradientBg}>
                <div className='col-12 text-center'>
                    <h1 className='display-4 fw-bold text-white mb-4'>
                        We pioneered discount broking in India
                    </h1>
                    <p className='lead text-light fs-3 opacity-90'>
                        Now, we're revolutionizing it with technology
                    </p>
                    <div className='mt-5'>
                        <div className='stats-container d-flex justify-content-center gap-5' style={styles.statsContainer}>
                            <div className='text-center'>
                                <div className='h2 fw-bold text-warning'>1Cr+</div>
                                <div className='text-light'>Clients</div>
                            </div>
                            <div className='text-center'>
                                <div className='h2 fw-bold text-warning'>15%+</div>
                                <div className='text-light'>Retail Volume</div>
                            </div>
                            <div className='text-center'>
                                <div className='h2 fw-bold text-warning'>2010</div>
                                <div className='text-light'>Pioneers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className='row py-8' style={{ padding: '6rem 0' }}>
                <div className='col-12 col-lg-6 p-5'>
                    <div className='pe-lg-4'>
                        <h3 className='h4 fw-bold text-primary mb-4'>Our Journey</h3>
                        <p className='text-muted mb-4 fs-6 lh-lg' style={styles.contentText}>
                            We kick-started operations on August 15th, 2010 with the goal of breaking all barriers 
                            that traders and investors face in India in terms of cost, support, and technology. 
                            We named the company <strong>Zerodha</strong>, a combination of Zero and "Rodha", 
                            the Sanskrit word for barrier.
                        </p>
                        <p className='text-muted mb-4 fs-6 lh-lg' style={styles.contentText}>
                            Today, our disruptive pricing models and in-house technology have made us the 
                            biggest stock broker in India.
                        </p>
                        <p className='text-muted fs-6 lh-lg' style={styles.contentText}>
                            Over <strong>1+ Crore clients</strong> place millions of orders every day through 
                            our powerful ecosystem of investment platforms, contributing over 
                            <strong> 15% of all Indian retail trading volumes</strong>.
                        </p>
                    </div>
                </div>
                
                <div className='col-12 col-lg-6 p-5'>
                    <div className='ps-lg-4 d-none d-lg-block' style={styles.rightColumn}>
                        <ContentRight />
                    </div>
                    <div className='d-block d-lg-none' style={styles.rightColumnMobile}>
                        <ContentRight />
                    </div>
                </div>
            </div>

            {/* Additional Visual Element */}
            <div className='row py-5 bg-light'>
                <div className='col-12 text-center'>
                    <p className='text-muted fst-italic fs-5'>
                        "Breaking barriers, building futures"
                    </p>
                </div>
            </div>
        </div>
    );
}

// Separate component for right column content to avoid duplication
function ContentRight() {
    const contentText = {
        lineHeight: '1.8',
        fontSize: '1.1em'
    };

    return (
        <>
            <h3 className='h4 fw-bold text-primary mb-4'>Beyond Broking</h3>
            <p className='text-muted mb-4 fs-6 lh-lg' style={contentText}>
                In addition, we run a number of popular open online educational and community 
                initiatives to empower retail traders and investors.
            </p>
            <p className='text-muted mb-4 fs-6 lh-lg' style={contentText}>
                <a href='#' className='text-decoration-none fw-bold text-success'>
                    Rainmatter
                </a>, our fintech fund and incubator, has invested in several fintech startups 
                with the goal of growing the Indian capital markets.
            </p>
            <p className='text-muted fs-6 lh-lg' style={contentText}>
                And yet, we are always up to something new every day. Catch up on the latest 
                updates on our blog or see what the media is saying about us.
            </p>
            
            {/* Call to Action Buttons */}
            <div className='mt-5 pt-3'>
                <button className='btn btn-primary me-3 px-4 py-2 fw-semibold'>
                    Read Our Blog
                </button>
                <button className='btn btn-outline-primary px-4 py-2 fw-semibold'>
                    Media Coverage
                </button>
            </div>
        </>
    );
}

export default Hero;