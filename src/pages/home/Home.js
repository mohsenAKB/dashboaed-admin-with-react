import React from 'react';
import './Home.css';
import Feature from "../../components/features/Feature";
import Chart from "../../components/chart/Chart";
import {xAxisData} from "../../datas";
const Home = () => {
    return (
      <section className="home">
        <Feature />
        <Chart grid title="Month sale" data={xAxisData} datakey="Sale"/>
      </section>
    );
}

export default Home;
