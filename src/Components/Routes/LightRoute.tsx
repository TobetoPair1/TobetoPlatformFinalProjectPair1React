import { useLocation } from "react-router-dom";
import FooterPlatform from "../FooterPlatform/FooterPlatform";
import MainRoutes from "./MainRoutes";
type Props = {};

const LightRoute = (props: Props) => {
  const path = useLocation().pathname;
  return (
    <div
      className="back-white"
      style={{ width: "100%", height: "0.5rem", overflow: "visible" }}
    >
      <MainRoutes />
      {path != "/kurs" ? <FooterPlatform /> : null}
    </div>
  );
};
export default LightRoute;
