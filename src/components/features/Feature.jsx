import React from "react";
import "./Feature.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const Feature = () => {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -11.4 <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <div className="featureSub">Compared to last month</div>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -1.4 <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <div className="featureSub">Compared to last month</div>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            +11.4 <ArrowUpwardIcon className="featureIcon " />
          </span>
        </div>
        <div className="featureSub">Compared to last month</div>
      </div>
    </div>
  );
};

export default Feature;
