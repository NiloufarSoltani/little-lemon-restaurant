import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReservationForm(props) {
  const navigate = useNavigate();
  const defaultTimes = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    tel: "",
    people: 1,
    date: "",
    occasion: "",
    preferences: "",
    comments: "",
    time: defaultTimes[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Redirect to confirmation page
    navigate('/confirmation');
  }


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleDateChange = (e) => {
    handleInputChange(e);
    const stringify = e.target.value;
    const date = new Date(stringify);
    props.updateTimes(date);
  };

  const timeOptions = (props.availableTimes.length > 0 ? props.availableTimes : defaultTimes)
    .map((time, index) => <option key={index} value={time}>{time}</option>);

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fName">First Name</label>
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={formData.fName}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={formData.lName}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          required
          minLength={4}
          maxLength={200}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="tel">Phone Number</label>
        <input
          type="tel"
          id="tel"
          placeholder="(xxx)-xxx-xxxx"
          value={formData.tel}
          required
          minLength={10}
          maxLength={25}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="people">Number of People</label>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={formData.people}
          required
          min={1}
          max={100}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="date">Select Date</label>
        <input
          type="date"
          id="date"
          required
          value={formData.date}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <label htmlFor="time">Select Time</label>
        <select id="time" required value={formData.time} onChange={handleInputChange}>
          {timeOptions}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating Preferences</label>
        <select
          id="preferences"
          value={formData.preferences}
          onChange={handleInputChange}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label>
        <textarea
          id="comments"
          rows={8}
          placeholder="Additional Comments"
          value={formData.comments}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <button type="submit" className="action-button">
          Book Table
        </button>
      </div>
    </form>
  );
}
