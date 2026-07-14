import { useState } from "react";
import axios from "axios";

const AddBooking = () => {

    const [input, changeInput] = useState({

        bookingId: "",
        ownerName: "",
        email: "",
        phone: "",
        vehicleRegNo: "",
        vehicleBrand: "",
        vehicleModel: "",
        batteryCapacity: "",
        connectorType: "",
        chargingDate: "",
        timeSlot: "",
        estimatedUnits: "",
        chargingBayNo: ""

    })

    const [message, setMessage] = useState("")

    const inputHandler = (event) => {

        changeInput({

            ...input,
            [event.target.name]: event.target.value

        })

    }

    const readValues = () => {

        axios.post("http://localhost:3000/add-booking", input).then(

            (response) => {

                setMessage(response.data.message)

                changeInput({

                    bookingId: "",
                    ownerName: "",
                    email: "",
                    phone: "",
                    vehicleRegNo: "",
                    vehicleBrand: "",
                    vehicleModel: "",
                    batteryCapacity: "",
                    connectorType: "",
                    chargingDate: "",
                    timeSlot: "",
                    estimatedUnits: "",
                    chargingBayNo: ""

                })

            }

        ).catch(

            () => {

                setMessage("Something went wrong")

            }

        )

    }

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-success text-white">

                    <h3 className="text-center">
                        EV Charging Booking
                    </h3>

                </div>

                <div className="card-body">

                    {
                        message !== "" &&
                        <div className="alert alert-info">
                            {message}
                        </div>
                    }

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label>Booking ID</label>
                            <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Owner Name</label>
                            <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Phone</label>
                            <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Vehicle Registration No</label>
                            <input type="text" className="form-control" name="vehicleRegNo" value={input.vehicleRegNo} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Vehicle Brand</label>
                            <input type="text" className="form-control" name="vehicleBrand" value={input.vehicleBrand} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Vehicle Model</label>
                            <input type="text" className="form-control" name="vehicleModel" value={input.vehicleModel} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Battery Capacity</label>
                            <input type="text" className="form-control" name="batteryCapacity" value={input.batteryCapacity} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Connector Type</label>
                            <input type="text" className="form-control" name="connectorType" value={input.connectorType} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Charging Date</label>
                            <input type="date" className="form-control" name="chargingDate" value={input.chargingDate} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Time Slot</label>
                            <input type="text" className="form-control" name="timeSlot" value={input.timeSlot} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Estimated Units</label>
                            <input type="text" className="form-control" name="estimatedUnits" value={input.estimatedUnits} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-12 mb-3">
                            <label>Charging Bay Number</label>
                            <input type="text" className="form-control" name="chargingBayNo" value={input.chargingBayNo} onChange={inputHandler}/>
                        </div>

                        <div className="col-md-12 text-center">

                            <button
                                className="btn btn-success me-2"
                                onClick={readValues}
                            >
                                Book Slot
                            </button>

                            <button
                                className="btn btn-secondary"
                                onClick={() => window.location.reload()}
                            >
                                Reset
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AddBooking;