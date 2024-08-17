import React from "react";
import "App.css";

function HealthSafety({ formData, setFormData }) {
  return (
    <div>
      <h2>Stage 3: Health and Safety</h2>
      <label>
        Health Declaration:
        <input
          type="checkbox"
          checked={formData.healthDeclaration}
          onChange={(e) =>
            setFormData({ ...formData, healthDeclaration: e.target.checked })
          }
          required
        />
      </label>
      <label>
        Emergency Contact Information:
        <input
          type="text"
          value={formData.emergencyContact}
          onChange={(e) =>
            setFormData({ ...formData, emergencyContact: e.target.value })
          }
          required
        />
      </label>
      <label>
        Any Medical Conditions:
        <textarea
          value={formData.medicalConditions}
          onChange={(e) =>
            setFormData({ ...formData, medicalConditions: e.target.value })
          }
        />
      </label>
    </div>
  );
}

export default HealthSafety;
