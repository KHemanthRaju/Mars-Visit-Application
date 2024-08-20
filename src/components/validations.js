export const validatePersonalInfo = (formData) => {
  if (!formData.fullName || !formData.email || !formData.phone) {
    return "Please fill all required fields in Personal Information.";
  }
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    return "Please enter a valid email in Personal Information Page.";
  }
  if (!/^\+?\d{10,15}$/.test(formData.phone)) {
    return "Please enter a valid phone number in Personal Information Page.";
  }
  return null;
};

export const validateTravelPreferences = (formData) => {
  if (!formData.departureDate || !formData.returnDate) {
    return "Please fill all required fields in Travel Preferences.";
  }
  return null;
};

export const validateHealthSafety = (formData) => {
  if (!formData.healthDeclaration) {
    return "Please complete the Health Declaration.";
  }
  return null;
};
