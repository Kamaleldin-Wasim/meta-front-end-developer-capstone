import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';
const Main = () => {
    const speedRandom = function(seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function() { return (s = s * a % m)/m; };
    }
    const fetchAPI = function(date) {
        let result = [];
        let random = speedRandom(date.getDate());
        for(let i=17; i<=23; i++) {
            if(i%2 === random) { result.push(i + ":00"); }
            if((i+1)%2 === random) { result.push(i + ":30"); }
        }
        return result;
    }
    const submitAPI = function(formData) { return true; }

    // reducer function
    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date(date)) };
    }
    const initialState = { availableTimes : fetchAPI(new Date()) };
    const [state, dispatch] = React.useReducer(updateTimes, initialState);
    const navigate = useNavigate();
    function submitForm(formData) {
        if(submitAPI(formData)){ navigate('/confirmed'); }
    }
    return (
        <main>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/booking' element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path='/confirmed' element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}
export default Main;