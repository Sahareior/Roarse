import Footer from "../../homepage/footer/Footer";
import AuthNavbar from "../../homepage/Navbar/AuthNavber";
import AuthBanner from "../AuthBanner";
import SignupForm from "./SignupForm";


const Signup = () => {
  const bannerData = {
    title: "Start Your Journey with Roarse",
    description: "Join thousands of shippers and carriers who trust Roarse for their freight logistics needs.",
    features: [
      "Free account setup in minutes",
      "Access to AI-powered tools",
      "24/7 customer support",
      "No credit card required",
    ],
  };

  return (
    <>
      <AuthNavbar />
      <div className="bg-gray-100 flex items-center justify-center py-20 min-h-[80vh]">
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl w-full px-4">
          {/* Left: Reusable Auth Banner */}
          <AuthBanner
            title={bannerData.title}
            description={bannerData.description}
            features={bannerData.features}
          />

          {/* Right: Signup Form */}
          <SignupForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;