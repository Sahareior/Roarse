import { FiCheck } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const WhyDriversLoveRoarse = () => {
  const location = useLocation();

  // Default fallback data
  let title = "Why Drivers Love Roarse";
  let description =
    "Join the fastest-growing driver community with access to premium freight, transparent pricing, and tools that help you maximize every mile. No hidden fees, no games—just honest opportunities.";
  let buttonText = "Get Started";
  let benefits = [
    "No subscription fees for basic plan",
    "Reduce empty miles by up to 40%",
    "24/7 driver support hotline",
    "Digital BOL and POD submission",
    "Fuel card integration",
    "Load board with 10,000+ daily loads",
    "Performance-based priority booking",
  ];

  // Override based on pathname
  if (location.pathname === "/carrier") {
    title = "Why Drivers Love Roarse";
    description =
      "Join the fastest-growing driver community with access to premium freight, transparent pricing, and tools that help you maximize every mile. No hidden fees, no games—just honest opportunities.";
    buttonText = "Get Started";
    benefits = [
      "No subscription fees for basic plan",
      "Reduce empty miles by up to 40%",
      "24/7 driver support hotline",
      "Digital BOL and POD submission",
      "Fuel card integration",
      "Load board with 10,000+ daily loads",
      "Performance-based priority booking",
    ];
  } else if (location.pathname === "/shipper") {
    title = "Why Shippers Choose Roarse";
    description =
      "Join thousands of businesses that have transformed their logistics operations with our intelligent shipping platform. Experience faster carrier matching, better rates, and complete visibility.";
    buttonText = "Get Started";
    benefits = [
      "Dedicated account manager (Premium)",
      "Multi-modal transport support",
      "Automated invoice reconciliation",
      "Average 2-hour carrier response time",
      "99.5% shipment tracking accuracy",
      "Save up to 30% on freight costs",
      "Access to 50,000+ verified carriers",
    ];
  } else if (location.pathname === "/truck") {
    title = "Why Choose Roars for Road Transport?";
    description =
      "Our platform combines cutting-edge technology with reliable service to deliver exceptional results for drivers and shippers alike.";
    buttonText = "Quote Request";
    benefits = [
      "Multi-stop route planning",
      "Digital proof of delivery",
      "24/7 customer support",
      "Comprehensive insurance coverage",
      "Flexible scheduling and pickup times",
      "Automated load matching with AI",
      "Real-time GPS tracking on all shipments",
    ];
  } else if (location.pathname === "/air") {
    title = "Why Choose Roars for Air Transport?";
    description =
      "Fast, secure, and reliable air freight solutions backed by global partnerships and advanced tracking technology.";
    buttonText = "Quote Request";
    benefits = [
      "Global airport network coverage",
      "Real-time flight tracking",
      "Customs documentation support",
      "Temperature-controlled options",
      "Dangerous goods certification",
      "Same-day pickup available",
      "Insurance up to $500K per shipment",
    ];
  } else if (location.pathname === "/ship") {
    title = "Why Choose Our Sea Freight Service?";
    description =
      "Partner with 100+ leading shipping lines for competitive rates and reliable service to major ports worldwide. Expert handling and full visibility every step of the way.";
    buttonText = "Quote Request";
    benefits = [
      "Free warehousing (7 days)",
      "Comprehensive marine insurance",
      "Hazardous cargo certified",
      "Competitive ocean freight rates",
      "Container tracking & monitoring",
      "Customs clearance assistance",
    ];
  }

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl robMed font-semibold mb-4">{title}</h2>

            <p className="text-gray-600 robReg max-w-md mb-8">{description}</p>

            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-black/90 transition">
              {buttonText}
            </button>
          </div>

          {/* Right Benefits List */}
          <div className="space-y-3">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border rounded-md px-4 py-3 shadow-sm"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-black">
                  <FiCheck className="text-black text-sm" />
                </div>
                <p className="text-sm robReg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDriversLoveRoarse;