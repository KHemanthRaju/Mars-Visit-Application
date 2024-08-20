export const validatePersonalInfo = (formData) => {
  if (!formData.fullName || !formData.email || !formData.phone) {
    alert("Please fill all required fields in Personal Information.");
    return;
  }
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    alert("Please enter a valid email in Personal Information Page.");
    return;
  }
  if (!/^\+?\d{10,15}$/.test(formData.phone)) {
    alert("Please enter a valid phone number in Personal Information Page.");
    return;
  }
  return null;
};

export const validateTravelPreferences = (formData) => {
  if (!formData.departureDate || !formData.returnDate) {
    alert("Please fill all required fields in Travel Preferences.");
    return;
  }
  return null;
};

export const validateHealthSafety = (formData) => {
  if (!formData.healthDeclaration) {
    alert("Please complete the Health Declaration.");
    return;
  }
  return null;
};
