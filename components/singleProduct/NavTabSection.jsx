import GeneralChecking from "./GeneralChecking";
import GeneralSpefications from "./GeneralSpefications";
import Opinions from "./Opinions";
import TabMenu from "./TabMenu";

export default function NavTabSection() {
  return (
    <div className="row bg-white">
      <div className="col-sm-12 sp-description-wrapper">
       <TabMenu/>

        <div className="tab-content" id="myTabContent">
     <GeneralChecking/>
     <GeneralSpefications/>
         <Opinions/>
        </div>
      </div>
    </div>
  );
}
