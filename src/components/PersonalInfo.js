import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div>
      <h2>Stage 1: Personal Information</h2>
      <label>
        Full Name:
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          required
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          required
        />
      </label>
      <label>
        Nationality:
        <input
          type="text"
          value={formData.nationality}
          onChange={(e) =>
            setFormData({ ...formData, nationality: e.target.value })
          }
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </label>
    </div>
  );
}

export default PersonalInfo;
