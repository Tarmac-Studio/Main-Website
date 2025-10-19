import React, { useState } from "react";
import { Link } from "react-router-dom";
import stars1 from "../../assets/images/About/stars1.svg";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeToPolicy: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeToPolicy: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    validateField(name, formData[name as keyof typeof formData]);
  };

  const validateField = (name: string, value: any) => {
    let error = "";
    switch (name) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        break;
      case "lastName":
        if (!value.trim()) error = "Last name is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        break;
      case "agreeToPolicy":
        if (!value) error = "You must agree to the Privacy Policy";
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName.trim() ? "First name is required" : "",
      lastName: !formData.lastName.trim() ? "Last name is required" : "",
      email: !formData.email.trim()
        ? "Email is required"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? "Please enter a valid email address"
        : "",
      message: !formData.message.trim() ? "Message is required" : "",
      agreeToPolicy: !formData.agreeToPolicy
        ? "You must agree to the Privacy Policy"
        : "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "9e6d66a5-8d13-49ae-b62d-2d06d3ab3ce4", // Your access key
          subject: `New Contact Form Message from ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          agreeToPolicy: formData.agreeToPolicy ? "Yes" : "No",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          agreeToPolicy: false,
        });

        // Clear errors
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          agreeToPolicy: "",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClass = (fieldName: keyof typeof errors) => {
    const baseClass =
      "w-full h-[46px] bg-[#00000033] border rounded-[100px] px-[15px] text-white placeholder-gray-500 focus:outline-none text-[16px] backdrop-blur-[50px] shadow-[inset_2px_5px_10px_0px_#A4A4A426]";
    const errorClass = "border-red-500";
    const successClass = "border-[#00FFFF80] focus:border-[#00FFFF]";
    return `${baseClass} ${errors[fieldName] ? errorClass : successClass}`;
  };

  const getTextareaClass = () => {
    const baseClass =
      "w-full h-[150px] bg-[#00000033] border rounded-[25px] px-[15px] py-[15px] text-white placeholder-gray-500 focus:outline-none resize-none text-[16px] backdrop-blur-[50px] shadow-[inset_2px_5px_10px_0px_#A4A4A426]";
    const errorClass = "border-red-500";
    const successClass = "border-[#00FFFF80] focus:border-[#00FFFF]";
    return `${baseClass} ${errors.message ? errorClass : successClass}`;
  };

  return (
    <section className="relative bg-black text-white">
      {/* Stars Background */}
      <img
        src={stars1}
        alt="Stars Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />

      {/* Outer container */}
      <div className="relative max-w-[980px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-20 flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-2 w-full md:w-[288px] text-center md:text-left">
          <p className="text-[#00FFFF] text-lg sm:text-xl font-medium">
            Contact Us
          </p>
          <h2 className="font-bold text-3xl sm:text-5xl leading-[110%] bg-gradient-to-l from-[#F6F4F4] to-[#585858] bg-clip-text text-transparent">
            Get in <br /> Touch
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[606px] min-h-[500px] rounded-[30px] p-5 sm:p-8 flex flex-col gap-6 bg-[rgba(0,0,0,0.6)] backdrop-blur-[40px] shadow-[inset_2px_5px_10px_0px_#A4A4A426]">
            <h3 className="text-lg sm:text-xl font-medium text-gray-400">
              Write Us a Message
            </h3>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm">
                ❌ Failed to send message. Please try again or contact us
                directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* First Name */}
                <div className="flex-1">
                  <label className="block text-[14px] font-medium mb-2 text-gray-300">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass("firstName")}
                    placeholder="Joshua"
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-[12px] mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="flex-1">
                  <label className="block text-[14px] font-medium mb-2 text-gray-300">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass("lastName")}
                    placeholder="Tarmac"
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-[12px] mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[14px] font-medium mb-2 text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass("email")}
                  placeholder="tarmac@gmail.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[14px] font-medium mb-2 text-gray-300">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getTextareaClass()}
                  placeholder="Leave us a message"
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className={`appearance-none w-5 h-5 rounded-full border ${
                    errors.agreeToPolicy ? "border-red-500" : "border-[#00FFFF]"
                  } ${
                    formData.agreeToPolicy ? "bg-[#00FFFF]" : "bg-transparent"
                  } flex-shrink-0 transition-colors duration-200 disabled:opacity-50`}
                />
                <span className="text-[15px] font-medium leading-[100%] text-gray-300">
                  I agree to the{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-[#00FFFF] hover:underline focus:outline-none"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>
              {errors.agreeToPolicy && (
                <p className="text-red-500 text-[12px] mt-1">{errors.agreeToPolicy}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full max-w-[566px] h-[50px] rounded-[1000px] border-2 border-[#00FFFF] px-[20px] py-[15px] flex items-center justify-center gap-[5px] bg-[#00FFFF] text-black font-medium hover:bg-[#00e5e5] text-[16px] mt-[15px] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
