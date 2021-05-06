import React from 'react';
function Topbar(){
    return(
        <div>
            <div className="row" id="row1">
                <div className="col-2">
                    <img src="https://img.icons8.com/color/75/000000/sheep-on-bike.png" alt="" id="logo"/>
                </div>
                <div className="col-7" id="topic">
                    <p>Pro_Rental_Bikes</p>
                </div>
                <div className="col-3">
                    <div id="logup">
                        <nav className="nav nav-pills nav-justified">
                            {/* <a class="nav-link" href="#">Tariff</a>
                            <a class="nav-link" href="#">Login</a>
                            <a class="nav-link active" aria-current="page" href="" id="signbutton">Signup</a> */}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topbar;