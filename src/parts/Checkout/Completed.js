import React from 'react'
import Fade from 'react-reveal'

import CompletedIllustration from 'assets/image/illustration_completed.jpg'

export default function Completed() {
    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content-center text-center">
                    <div className="col-4">
                        <img
                            src={CompletedIllustration}
                            className="img-fluid"
                            alt="Completed Checkout Apartment"
                        />
                        <p className="text-gray-500">
                            We will inform you via email later once the transaction has been accepted
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
