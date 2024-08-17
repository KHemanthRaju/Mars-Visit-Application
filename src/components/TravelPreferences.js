import React from "react";
import "App.css";

function TravelPreferences({ formData, setFormData }) {
  return (
    <div>
      <h2>Stage 2: Travel Preferences</h2>
      <label>
        Departure Date:
        <input
          type="date"
          value={formData.departureDate}
          onChange={(e) =>
            setFormData({ ...formData, departureDate: e.target.value })
          }
          required
        />
      </label>
      <label>
        Return Date:
        <input
          type="date"
          value={formData.returnDate}
          onChange={(e) =>
            setFormData({ ...formData, returnDate: e.target.value })
          }
          required
        />
      </label>
      <label>
        Accommodation Preference:
        <select
          value={formData.accommodation}
          onChange={(e) =>
            setFormData({ ...formData, accommodation: e.target.value })
          }
          required
        >
          <option value="space-hotel">Space Hotel</option>
          <option value="martian-base">Martian Base</option>
        </select>
      </label>
      <label>
        Special Requests or Preferences:
        <textarea
          value={formData.specialRequests}
          onChange={(e) =>
            setFormData({ ...formData, specialRequests: e.target.value })
          }
        />
      </label>
    </div>
  );
}

export default TravelPreferences;
