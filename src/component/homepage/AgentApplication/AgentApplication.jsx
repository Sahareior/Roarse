
import NavbarWithHero from "../../reusable/NavbarWithHero";
import Footer from "../footer/Footer";
import HowItsWork from "../HomepageReusableComponent/HowItsWork";
import AgentApplicationForm from "./AgentApplicationForm";

const AgentApplication = () => {
  const heroTitle = "Be an agent and earn";
  const heroSubtitle = "Join our platform as an agent to start handling shipments across regions. Gain access to flexible earning potential, expand your network, and provide reliable, trusted transport services with full legal backing and support.";

  return (
    <div>
      <NavbarWithHero title={heroTitle} subtitle={heroSubtitle} />
      <HowItsWork />
      <AgentApplicationForm />
      <Footer />
    </div>
  );
};

export default AgentApplication;
