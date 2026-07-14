import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddBooking from "./components/AddBooking";
import ViewBookings from "./components/ViewBookings";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-booking" element={<AddBooking />} />
        <Route path="/view-bookings" element={<ViewBookings />} />
      </Routes>
    </>
  );
}

export default App;