import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">

      <div className="text-center">

        <h1>EV Charging Station Management System</h1>

        <p className="mt-3">
          Manage EV Charging Slot Bookings
        </p>

        <Link
          className="btn btn-success me-3"
          to="/add-booking"
        >
          Add Booking
        </Link>

        <Link
          className="btn btn-primary"
          to="/view-bookings"
        >
          View Bookings
        </Link>

      </div>

    </div>
  );
};

export default Home;