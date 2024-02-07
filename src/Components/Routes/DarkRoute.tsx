import Footer from "../Footer/Footer";
import MainRoutes from "./MainRoutes";

type Props = {}

const DarkRoute = (props: Props) => {
  return (
    <div className="bg-front-dark bg-front-width" style={{ height: "0.5rem", overflow: "visible", width: "auto" }}>
      <main className="bg-front-dark">
        <MainRoutes />
      </main>
      <Footer />
    </div>
  )
}
export default DarkRoute;