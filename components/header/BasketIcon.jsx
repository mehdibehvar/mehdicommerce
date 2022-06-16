import { store } from "contexts/store";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function BasketIcon() {
  const {state} = useContext(store);
  const { basketItems } = state.basket;
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>  
  {domLoaded &&  <div>
    {basketItems.length>0?<span
      className="basket-badg position-absolute p-1 translate-middle badge bg-primary 
           text-white border border-light rounded-circle"
 >{basketItems.length}</span>:<span></span>}
   <Link href="/basket">
      <a className="cta handbag">
        <span className="material-icons text-muted m-2">shopping_bag</span>
      </a>
    </Link> 
    </div>}
 </>
  
  );
}
//I added useeffect because the following error:
///Hydration failed because the initial UI does not match what was rendered on the server
//Importing and running some of the packages can cause this error too.
/// It's mostly because the package is using Window object somewhere.
///because useeffect only execute on clientside,in the clentside i setDomLoaded true
///if Domloaded be true it means that we are in clientside and then we can render the span that has 
///bootstrap classNames