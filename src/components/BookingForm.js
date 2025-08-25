// FileName: /BookingForm.js
import React from 'react';

const BookingForm = (props) => {
    const [date, setDate] = React.useState('');
    const [times, setTimes] = React.useState('');
    const [guests, setGuests] = React.useState('');
    const [occasion, setOccasion] = React.useState('');

    const defaultTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const availableTimes = props.availableTimes && props.availableTimes.length > 0
        ? props.availableTimes
        : defaultTimes;

    const handleSubmit = (e) => {
        e.preventDefault();
        // ✅ قم بتغيير SubmitForm إلى submitForm (حرف صغير)
        props.submitForm({ date, times, guests, occasion });
    };

    return (
        <section className="form-section" id="reservations">
            <div className="form-container">
                <h2>Book a Table</h2>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="formField">
                            <div className="form-group">
                                <label htmlFor="book-date">Choose date</label>
                                <input
                                    type="date"
                                    id="book-date"
                                    value={date}
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                        props.dispatch && props.dispatch(e.target.value);
                                    }}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="book-time">Choose time</label>
                                <select
                                    id="book-time"
                                    value={times}
                                    onChange={(e) => setTimes(e.target.value)}
                                    required
                                >
                                    <option value="">Select a time</option>
                                    {availableTimes.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="formField">
                            <div className="form-group">
                                <label htmlFor="book-guests">Number of guests</label>
                                <input
                                    id="book-guests"
                                    min={1}
                                    type="number"
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="book-occasion">Occasion</label>
                                <select
                                    id="book-occasion"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    required
                                >
                                    <option value="">Select an occasion</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="Date">Date</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value="Make Your Reservation" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default BookingForm;
