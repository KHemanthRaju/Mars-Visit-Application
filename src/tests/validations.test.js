// validations.test.js
import {
  validatePersonalInfo,
  validateTravelPreferences,
  validateHealthSafety,
} from "../components/validations";

describe("Validation Functions", () => {
  describe("validatePersonalInfo", () => {
    test("should return an error if required fields are missing", () => {
      const formData = { fullName: "", email: "", phone: "" };
      expect(validatePersonalInfo(formData)).toBe(
        "Please fill all required fields in Personal Information."
      );
    });

    test("should return an error if email is invalid", () => {
      const formData = {
        fullName: "John Doe",
        email: "invalidemail",
        phone: "+1234567890",
      };
      expect(validatePersonalInfo(formData)).toBe(
        "Please enter a valid email in Personal Information Page."
      );
    });

    test("should return an error if phone number is invalid", () => {
      const formData = {
        fullName: "John Doe",
        email: "john.doe@example.com",
        phone: "12345",
      };
      expect(validatePersonalInfo(formData)).toBe(
        "Please enter a valid phone number in Personal Information Page."
      );
    });

    test("should return null if all fields are valid", () => {
      const formData = {
        fullName: "John Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
      };
      expect(validatePersonalInfo(formData)).toBeNull();
    });
  });

  describe("validateTravelPreferences", () => {
    test("should return an error if departure or return date is missing", () => {
      const formData = { departureDate: "", returnDate: "" };
      expect(validateTravelPreferences(formData)).toBe(
        "Please fill all required fields in Travel Preferences."
      );
    });

    test("should return null if both dates are provided", () => {
      const formData = {
        departureDate: "2024-08-01",
        returnDate: "2024-08-10",
      };
      expect(validateTravelPreferences(formData)).toBeNull();
    });
  });

  describe("validateHealthSafety", () => {
    test("should return an error if health declaration is missing", () => {
      const formData = { healthDeclaration: "" };
      expect(validateHealthSafety(formData)).toBe(
        "Please complete the Health Declaration."
      );
    });

    test("should return null if health declaration is provided", () => {
      const formData = { healthDeclaration: "I am healthy" };
      expect(validateHealthSafety(formData)).toBeNull();
    });
  });
});
