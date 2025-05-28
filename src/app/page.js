import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import SignatureBuilder from "../../components/SignatureBuilder/SignatureBuilder";

export default function Home() {
  return (
    <div>
    <div>
  <Hero />
</div>
<div>
  <HowItWorks />
  </div>
  <div>
    <SignatureBuilder />
  </div>
  </div>
  );
}
