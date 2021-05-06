import React from "react"
import Topbar from "./topbar"
import bajajpulsar from "./images/bajaj-pulsar-150.jpg"
function Rental(){
    return(
        <div>
            <div className="container-fluid">
                <Topbar/>
                <hr/>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                        <img src={bajajpulsar} className="card-img-top" alt="..." style={{height:"220px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">Bajaj-Pulsar-150  <span class="badge rounded-pill bg-success">Available</span></h5>
                            <p>Free 180kms <span>Excess $2/hr</span></p>
                            <h2>$15</h2><buttton className="btn btn-primary">BOOK</buttton>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rental;