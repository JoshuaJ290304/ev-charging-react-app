import { useEffect, useState } from "react";
import axios from "axios";

const ViewBookings = () => {

    const [bookings, setBookings] = useState([]);

    const fetchData = () => {

        axios.post("http://localhost:3000/view-bookings", {})

        .then((response) => {

            setBookings(response.data);

        })

        .catch((error) => {

            console.log(error);

        });

    };

    useEffect(() => {

        fetchData();

    }, []);

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3 className="text-center">
                        View EV Charging Bookings
                    </h3>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-bordered table-striped table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Booking ID</th>
                                    <th>Owner</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Vehicle No</th>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Battery</th>
                                    <th>Connector</th>
                                    <th>Date</th>
                                    <th>Time Slot</th>
                                    <th>Units</th>
                                    <th>Bay No</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    bookings.map((value,index)=>{

                                        return(

                                            <tr key={index}>

                                                <td>{value.bookingId}</td>
                                                <td>{value.ownerName}</td>
                                                <td>{value.email}</td>
                                                <td>{value.phone}</td>
                                                <td>{value.vehicleRegNo}</td>
                                                <td>{value.vehicleBrand}</td>
                                                <td>{value.vehicleModel}</td>
                                                <td>{value.batteryCapacity}</td>
                                                <td>{value.connectorType}</td>
                                                <td>{value.chargingDate}</td>
                                                <td>{value.timeSlot}</td>
                                                <td>{value.estimatedUnits}</td>
                                                <td>{value.chargingBayNo}</td>

                                            </tr>

                                        )

                                    })

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewBookings