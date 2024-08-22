import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: "KzeM9lk9nhFHfvXDgoFv7TUuhQUfguKIWgZIsjlT",
});
export async function generateAiResponse(formData) {
  const message =
    `Generate a full paragraph in french based on the following information:\n\n` +
    `Full Name: ${formData.fullName}\n` +
    `Date of Birth: ${formData.birthDate}\n` +
    `Residential Address: ${formData.residentialAddress}\n` +
    `Contact Information: ${formData.contactInfo}\n` +
    `Government-issued ID: ${formData.govID}\n` +
    `Social Security Number (SSN): ${formData.ssn}\n` +
    `Employment Status: ${formData.employmentStatus}\n` +
    `Monthly Income: ${formData.monthlyIncome}\n` +
    `Bank Account Information: ${formData.bankAccountInfo}\n` +
    `Proof of Address: ${formData.proofOfAddress}\n`;
  const response = await cohere.chat({
    message: message,
  });
  return response;
}
