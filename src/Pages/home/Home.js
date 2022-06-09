import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../Components/Dashboard/WidgetSm/WidgetSm";
import WidgetLg from "../../Components/Dashboard/WidgetLg/WidgetLg";
import FeaturedInfo from "../../Components/Dashboard/featuredInfo/FeaturedInfo";
import Chart from "../../Components/Dashboard/chart/Chart";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
