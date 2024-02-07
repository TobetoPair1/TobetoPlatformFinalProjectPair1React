import FooterPlatform from "../FooterPlatform/FooterPlatform";
import MainRoutes from "./MainRoutes";
type Props = {}

const LightRoute = (props: Props) => {
  return (
    <div className="back-white" style={{ width: '100%', height: '0.5rem', overflow: 'visible' }}>
      <MainRoutes />
      <FooterPlatform />
    </div>
  )
}
export default LightRoute;