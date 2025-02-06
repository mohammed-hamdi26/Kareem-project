import EventsSection from "./Components/EventsSection";
import HeaderSection from "./Components/HeaderSection";
import LocationSection from "./Components/LocationSection";
import PresentedBy from "./Components/PresentedBy";
import Section from "./Components/Section";

function App() {
  return (
    <>
      <HeaderSection></HeaderSection>
      <Section className={"bg-[#27445D]"} label="Events">
        <EventsSection />
      </Section>
      <Section label="Locations" className={"bg-[#1A2B3C]"}>
        <LocationSection />
      </Section>
      <PresentedBy />
    </>
  );
}

export default App;
