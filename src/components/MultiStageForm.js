import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import TravelPreferences from "./TravelPreferences";
import HealthSafety from "./HealthSafety";
import Navbar from "./Navbar/Navbar";
import {
  validateHealthSafety,
  validatePersonalInfo,
  validateTravelPreferences,
} from "./validations";

function MultiStageForm() {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    nationality: "",
    email: "",
    phone: "",
    departureDate: "",
    returnDate: "",
    accommodation: "",
    specialRequests: "",
    healthDeclaration: "",
    emergencyContact: "",
    medicalConditions: "",
  });

  const nextStage = () => setStage(stage + 1);
  const prevStage = () => setStage(stage - 1);

  const handleSubmit = () => {
    if (
      validatePersonalInfo(formData) &&
      validateTravelPreferences(formData) &&
      validateHealthSafety(formData)
    ) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div>
      <Navbar />
      {stage === 1 && (
        <PersonalInfo formData={formData} setFormData={setFormData} />
      )}
      {stage === 2 && (
        <TravelPreferences formData={formData} setFormData={setFormData} />
      )}
      {stage === 3 && (
        <HealthSafety formData={formData} setFormData={setFormData} />
      )}

      <div style={{ alignItems: "center" }}>
        {stage > 1 && <button onClick={prevStage}>Back</button>}
        {stage < 3 && <button onClick={nextStage}>Next</button>}
        {stage === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
}

export default MultiStageForm;
