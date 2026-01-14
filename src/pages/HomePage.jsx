import CardList from "../components/Card/CardList"
import SliderList from "../components/Slider/SliderList"
import ContactList from "../components/Contact/ContactList"
import LayoutRoot from "../layouts/LayoutRoot"

const HomePage = () => {
  return (
    <LayoutRoot>

      {/** Slider  */}
      <SliderList />

      {/** Offer cards */}
      <CardList />

      {/** Contact information */}
      <ContactList />
      
    </LayoutRoot>
  )
}

export default HomePage