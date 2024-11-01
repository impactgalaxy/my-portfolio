import Messenger from "../../shared-components/messenger/Messenger";
import Awards from "./components/Awards";
import Contacts from "./components/Contacts";
import Educations from "./components/Educations";
import Experience from "./components/Experience";
// import FavoriteStack from "./components/FavoriteStack";
import FeaturedWork from "./components/FeaturedWork";
import Intro from "./components/Intro";
import MyExpertise from "./components/MyExpertise";

export default function Home() {
  return (
    <div>
      <Intro />
      <FeaturedWork />
      <MyExpertise />
      <Educations />
      <Experience />
      {/* <FavoriteStack /> */}
      <Awards />
      <Contacts />
      <Messenger />
    </div>
  );
}
