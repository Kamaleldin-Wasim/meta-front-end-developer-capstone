// FileName: /Booking.js
import React from 'react';
import BookingForm from './BookingForm';

const Booking = (props) => {
    return (
        <BookingForm
            availableTimes={props.availableTimes}
            dispatch={props.dispatch}
            submitForm={props.submitForm} // ✅ هذا هو الـ prop الذي يتم تمريره
        />
    );
}

export default Booking;
