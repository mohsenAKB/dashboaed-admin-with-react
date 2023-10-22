import React from 'react';
import './Home.css';
import Feature from "../../components/features/Feature";
import Chart from "../../components/chart/Chart";
import {xAxisData} from "../../datas";
import Widgetsm from "../../components/widgetSm/Widgetsm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
const Home = () => {
    return (
      <section className="home">
        <Feature />
        <Chart grid title="Month sale" data={xAxisData} datakey="Sale" />
        <div className="homeWidgets">
          <Widgetsm />
          <WidgetLg />
        </div>
      </section>
    );
}

export default Home;

