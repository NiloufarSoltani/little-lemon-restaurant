import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import ReservationForm from './ReservationForm';

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);

  // Define the function outside useEffect so it's accessible in updateTimes
  function fetchAvailableTimes(date) {
    if (typeof window.fetchAPI === 'function') {
      return window.fetchAPI(date);
    }
    return [];
  }

  useEffect(() => {
    // Fetch initial available times
    const times = fetchAvailableTimes(new Date());
    setAvailableTimes(times);
  }, []);

  function updateTimes(date) {
    const newTimes = fetchAvailableTimes(date);
    setAvailableTimes(newTimes);
  }

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </>
  );
}

export default BookingPage;
