import { useState } from "react";
import AuthNavbar from "../../homepage/Navbar/AuthNavber";
import Footer from "../../homepage/footer/Footer";
import AuthBanner from "../AuthBanner";
import ForgotPasswordForm from "./ForgotPasswordForm";
import VerifyCodeForm from "./VerifyCodeForm";
import ResetPasswordForm from "./ResetPasswordForm";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const bannerData = {
    title: step === 1 ? "Secure Account Recovery" : step === 2 ? "Verify Your Identity" : "Create a Strong Password",
    description:
      step === 1
        ? "We'll help you get back into your account quickly and securely."
        : step === 2
        ? "We've sent a 6-digit verification code to your email address to ensure the security of your account."
        : "Choose a password that you haven't used before and is hard to guess.",
    features:
      step === 1
        ? ["Enter your email address", "Verify with OTP code", "Create new password", "Access your account"]
        : step === 2
        ? ["Secure two-factor authentication", "Code expires in 2 minute", "Enhanced account protection"]
        : ["Use a mix of characters", "Make it at least 8 characters", "Don't use common words", "Unique to this account"],
  };

  return (
    <>
      <AuthNavbar />
      <div className="bg-gray-100 flex items-center justify-center py-20 min-h-[80vh]">
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl w-full px-4">
          {/* Left: Dynamic Auth Banner */}
          <AuthBanner
            title={bannerData.title}
            description={bannerData.description}
            features={bannerData.features}
          />

          {/* Right: Conditional Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl w-full md:w-1/2 flex flex-col justify-center roboto max-w-2xl">
            {step === 1 && (
              <ForgotPasswordForm onNext={(email) => { setEmail(email); setStep(2); }} />
            )}
            {step === 2 && (
              <VerifyCodeForm
                email={email}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}
            {step === 3 && (
              <ResetPasswordForm
                email={email}
                onSuccess={() => {
                  // Redirect to login after success
                  window.location.href = "/login";
                }}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;