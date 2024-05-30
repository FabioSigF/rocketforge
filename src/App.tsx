import { useEffect } from "react";
import Home from "./pages/Home"
import { useAppDispatch } from "./redux/store";
import { isAMobileDevice, isNotAMobileDevice } from "./redux/deviceSize/slice";

function App() {

  const dispatch = useAppDispatch();

  const updateMedia = () => {
    if((window.innerWidth < 768)) {
      dispatch(isAMobileDevice());
    } else {
      dispatch(isNotAMobileDevice());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  return (
    <div>
      <Home />
    </div>
  )
}

export default App
