import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "./landing.css"
import Topbar from './topbar';
import getDate from 'date-fns/getDate';
import { getMonth, getYear } from 'date-fns';

function Landing(){
    const [fromDate, setfromDate] = React.useState(new Date('2020-08-18T21:11:54'));
    const [toDate, settoDate] = React.useState(new Date('2020-08-18T21:11:54'));
    const [fromtime, setfromtime] = React.useState("");
    const [totime, settotime] = React.useState("");
    const [bikename,setBikename] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [response,setResponse] = React.useState(false)
    var date1 = `${getDate(fromDate)}.${getMonth(fromDate)+1}.${getYear(fromDate)}`;
    var date2 = `${getDate(toDate)}.${getMonth(toDate)+1}.${getYear(toDate)}`;
    console.log((date1),(date2),fromtime,totime,bikename)

    const [book,setBook]= React.useState("");
    const [dl,setDl]= React.useState("");
    const handlebooking=()=>{
        fetch("https://bike-rental-server-app.herokuapp.com/book",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name:book,
                email: email,
                licenseno: dl,
                bike:bikename,
                fromdate: date1,
                fromtime: fromtime,
                todate : (date2),
                totime : totime
            })
        })
        .then((resp)=>resp.json())
        .then((resp)=>{
            console.log(resp.message)
            if(resp.message == "Bike is successfully Booked. Please pick up at our station")
                alert(resp.message)
            else
                alert(resp.message)
        })
    }

    const handleClick=()=>{
        fetch("https://bike-rental-server-app.herokuapp.com/availability",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                bike:bikename,
                fromdate: (date1),
                fromtime: fromtime,
                todate : (date2),
                totime : totime
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.message)
            if(res.message === "Bike Available")
            {
                setResponse(true)
                alert(res.message)
            }
            else {
                setResponse(false)
                alert(res.message)
            }
        })
    }

    return(
        <div>
            <div className="container-fluid">
                <Topbar/>
                <hr/>
                <div className="row" id="row2">
                    <div className="col-2"></div>
                    <div className="col-6 p-4">   
                        <div className="row" id="date">
                            <div className="col">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                        <div className="input-group mb-3" style={{width:"400px"}}>
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Choose Bike</label>
                                            <select className="form-select" id="inputGroupSelect01" onChange={(e)=>setBikename(e.target.value)}>
                                                <option selected>Choose...</option>
                                                <option value="pulsar">Bajaj-Pulsar-150</option>
                                                <option value="activa">Honda Activa 110</option>
                                                <option value="access">Suzuki Access 125</option>
                                                <option value="duke">KTM Duke 200</option>
                                            </select>
                                        </div>
                                        <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="From date"
                                        format="MM/dd/yyyy"
                                        value={fromDate}
                                        onChange={(fromdate)=>setfromDate(fromdate)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                        <div className="input-group mb-3" style={{width:"400px"}}>
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">From time</label>
                                            <select className="form-select" id="inputGroupSelect01" onChange={(e)=>{setfromtime(e.target.value)}}>
                                                <option value="9.0">Choose..</option>
                                                <option value="9.0">09:00 AM</option>
                                                <option value="10.0">10:00 AM</option>
                                                <option value="11.0">11:00 AM</option>
                                                <option value="12.0">12:00 PM</option>
                                                <option value="13.0">1:00 PM</option>
                                                <option value="14.0">2:00 PM</option>
                                                <option value="15.0">3:00 PM</option>
                                                <option value="16.0">4:00 PM</option>
                                                <option value="17.0">5:00 PM</option>
                                                <option value="18.0">6:00 PM</option>
                                                <option value="19.0">7:00 PM</option>
                                                <option value="20.0">8:00 PM</option>
                                                <option value="21.0">9:00 PM</option>
                                                <option value="22.0">10:00 PM</option>
                                                <option value="23.0">11:00 PM</option>
                                                <option value="0.0">12:00 AM</option>
                                                <option value="1.0">01:00 AM</option>
                                                <option value="2.0">02:00 AM</option>
                                                <option value="3.0">03:00 AM</option>
                                                <option value="4.0">04:00 AM</option>
                                                <option value="5.0">05:00 AM</option>
                                                <option value="6.0">06:00 AM</option>
                                                <option value="7.0">07:00 AM</option>
                                                <option value="8.0">08:00 AM</option>
                                            </select>
                                        </div>
                                        <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="To Date"
                                        format="MM/dd/yyyy"
                                        value={toDate}
                                        onChange={(todate)=>settoDate(todate)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                         <div className="input-group mb-3" style={{width:"400px"}}> 
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">To time</label>
                                            <select className="form-select" id="inputGroupSelect01" onChange={(e)=>settotime(e.target.value)}>
                                                <option value="9.0">Choose..</option>
                                                <option value="9.0">09:00 AM</option>
                                                <option value="10.0">10:00 AM</option>
                                                <option value="11.0">11:00 AM</option>
                                                <option value="12.0">12:00 PM</option>
                                                <option value="13.0">1:00 PM</option>
                                                <option value="14.0">2:00 PM</option>
                                                <option value="15.0">3:00 PM</option>
                                                <option value="16.0">4:00 PM</option>
                                                <option value="17.0">5:00 PM</option>
                                                <option value="18.0">6:00 PM</option>
                                                <option value="19.0">7:00 PM</option>
                                                <option value="20.0">8:00 PM</option>
                                                <option value="21.0">9:00 PM</option>
                                                <option value="22.0">10:00 PM</option>
                                                <option value="23.0">11:00 PM</option>
                                                <option value="0.0">12:00 AM</option>
                                                <option value="1.0">01:00 AM</option>
                                                <option value="2.0">02:00 AM</option>
                                                <option value="3.0">03:00 AM</option>
                                                <option value="4.0">04:00 AM</option>
                                                <option value="5.0">05:00 AM</option>
                                                <option value="6.0">06:00 AM</option>
                                                <option value="7.0">07:00 AM</option>
                                                <option value="8.0">08:00 AM</option>
                                            </select>
                                        </div>
                                    </Grid>
                                </MuiPickersUtilsProvider>
                                <div className="row">
                                    <div className="col-6" style={{textAlign:"center"}}>
                                        <button className="btn btn-success"  onClick={handleClick}>Check Availability </button>
                                    </div>
                                    <div className="col-6">
                                        {response?(
                                            <div className="row">
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Book
                                                </button>

                                                <div className="modal fade" id="exampleModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">Book a Bike</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <form>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                                                        <input type="text" className="form-control" id="recipient-name" placeholder="Enter your name" value={book} onChange={(e)=>setBook(e.target.value)}/>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="recipient-name" className="col-form-label">Email ID</label>
                                                                        <input type="text" className="form-control" id="recipient-name"  placeholder="Email ID" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="recipient-name" className="col-form-label">Driving License ID:</label>
                                                                        <input type="text" className="form-control" id="recipient-name"  placeholder="Driving License ID" value={dl} onChange={(e)=>setDl(e.target.value)}/>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-primary" onClick={handlebooking}>Book</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ):(console.log(response))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing