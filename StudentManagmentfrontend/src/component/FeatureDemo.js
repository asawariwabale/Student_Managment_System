import React from 'react'

export default function FeatureDemo() {
  return (
 <>
            <div className="container my-4">
                <h2 className="text-center mb-4">Why Choose Us?</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card  bg-primary" style={{ borderColor: '#007bff' }}>
                            <div className="card-body">
                                <h5 className="card-title">Accademic Records</h5>
                                <p className="card-text">Our students top IIT and JEE.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card feature-card shadow-sm bg-success" style={{ borderColor: '#28a745' }}>
                            <div className="card-body">
                                <h5 className="card-title">High Quality Trainers</h5>
                                <p className="card-text">Our Trainers are expert in area.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card feature-card shadow-sm bg-danger" style={{ borderColor: '#dc3545' }}>
                            <div className="card-body">
                                <h5 className="card-title">Customer Support</h5>
                                <p className="card-text">Our dedicated support team is always here to help you with any queries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="text-center  text-white py-3" style={{ backgroundColor: '#778899'}}>
                <p>&copy; 2024 BrandName. All Rights Reserved.</p>
                <p>
                    <a href="#privacy-policy" className="text-white">Privacy Policy</a> | 
                    <a href="#terms" className="text-white">Terms of Service</a>
                </p>
            </footer>
        </>
  )
}
