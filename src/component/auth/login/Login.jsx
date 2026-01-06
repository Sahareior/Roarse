import Footer from "../../homepage/footer/Footer";
import AuthNavbar from "../../homepage/Navbar/AuthNavber";
import AuthBanner from "../AuthBanner";
import LoginForm from "./LoginForm";


const Login = () => {
  const promoData = {
    title: "AI-Powered Freight & Route Optimization",
    description:
      "Join thousands of shippers and carriers optimizing their logistics operations with intelligent AI technology.",
    features: [
      "Real-time tracking across all modes",
      "AI-powered load matching",
      "Intelligent route optimization",
    ],
  };

  return (
    <>
      <AuthNavbar />
      <div className="bg-gray-100 flex items-center justify-center py-20 min-h-[80vh]">
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full px-4">
          {/* Reusable Left Panel */}
          <AuthBanner
            title={promoData.title}
            description={promoData.description}
            features={promoData.features}
          />

          {/* Login Form */}
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;