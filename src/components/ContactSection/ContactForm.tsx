import React, { useState } from "react";
import { Link } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  agreeToPolicy: boolean;
};

type FormErrors = Record<keyof FormData, string>;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeToPolicy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({
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

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    validateField(name, formData[name as keyof FormData]);
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
    const newErrors: FormErrors = {
      firstName: formData.firstName.trim() ? "" : "First name is required",
      lastName: formData.lastName.trim() ? "" : "Last name is required",
      email: !formData.email.trim()
        ? "Email is required"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? "Please enter a valid email address"
        : "",
      message: formData.message.trim() ? "" : "Message is required",
      agreeToPolicy: formData.agreeToPolicy
        ? ""
        : "You must agree to the Privacy Policy",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "9e6d66a5-8d13-49ae-b62d-2d06d3ab3ce4",
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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          agreeToPolicy: false,
        });
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

  const getInputClass = (field: keyof FormErrors) => {
    const base =
      "w-full h-[46px] bg-[#00000033] border rounded-[100px] px-[15px] text-white placeholder-gray-500 focus:outline-none text-[16px] backdrop-blur-[50px] shadow-[inset_2px_5px_10px_0px_#A4A4A426]";
    const border = errors[field]
      ? "border-red-500"
      : "border-[#00FFFF80] focus:border-[#00FFFF]";
    return `${base} ${border}`;
  };

  const getTextareaClass = () => {
    const base =
      "w-full h-[150px] bg-[#00000033] border rounded-[25px] px-[15px] py-[15px] text-white placeholder-gray-500 focus:outline-none resize-none text-[16px] backdrop-blur-[50px] shadow-[inset_2px_5px_10px_0px_#A4A4A426]";
    const border = errors.message
      ? "border-red-500"
      : "border-[#00FFFF80] focus:border-[#00FFFF]";
    return `${base} ${border}`;
  };

  return (
    <section className="relative bg-transparent">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-2 w-full md:w-[288px] text-center md:text-left">
          <p className="cyan-text text-lg sm:text-xl font-medium">Contact Us</p>
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl md:leading-20 leading-relaxed main-text max-w-100 mx-auto">
            Get in Touch
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center w-full md:w-1/2 ">
          <div className="w-full rounded-[30px] p-5 sm:p-8 flex flex-col gap-6 contact-back  backdrop-blur-[40px] shadow-[inset_2px_5px_10px_0px_#A4A4A426]">
            <h3 className="text-lg sm:text-xl md:text-[22px] font-medium main-text">
              Write Us a Message
            </h3>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 cyan-back border rounded-lg text-black text-sm">
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
                  <label
                    htmlFor="firstName"
                    className="block text-[14px] font-medium mb-2 text-white"
                  >
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass("firstName")}
                    placeholder="Tarmac"
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
                  <label
                    htmlFor="lastName"
                    className="block text-[14px] font-medium mb-2 text-white"
                  >
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass("lastName")}
                    placeholder="Digital Studio"
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
                <label
                  htmlFor="email"
                  className="block text-[14px] font-medium mb-2 text-white"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass("email")}
                  placeholder="tarmac@gmail.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[14px] font-medium mb-2 text-white"
                >
                  Message *
                </label>
                <textarea
                  id="message"
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

              {/* Privacy Policy */}
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
                <span className="text-[15px] font-medium leading-[100%] text-white">
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
                <p className="text-red-500 text-[12px] mt-1">
                  {errors.agreeToPolicy}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full max-w-[566px] h-[50px] rounded-[1000px]  border-[#00FFFF] px-[20px] py-[15px] flex items-center justify-center gap-[5px] bg-[#00FFFF] text-black font-medium hover:bg-[#00e5e5] text-[16px] mt-[15px] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                        5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 
                        5.824 3 7.938l3-2.647z"
                      />
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
