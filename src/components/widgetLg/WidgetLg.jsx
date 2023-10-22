import React from "react";
import "./widgetLg.css";
const WidgetLg = () => {
    const Button =({type}) => {
        return <button className={'WidgetLgButton' + type}>{type}</button>
    }
  return (
    <section className="WidgetLg">
      <h3 className="WidgetLgTitle">Latest TransActions</h3>
      <table className="WidgetTable">
        <tr className="WidgetLgTr">
          <th className="WidgetLgTh">Customer</th>
          <th className="WidgetLgTh">Date</th>
          <th className="WidgetLgTh">Amount</th>
          <th className="WidgetLgTh">Status</th>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgetLgUser">
            <img src="img/mohsen.jpg" alt="" className="WidgetLgImg" />
            <span className="WidgetLgName">Mohsen akbari</span>
          </td>
          <td className="WidgetLgDate">2 May 2022</td>
          <td className="WidgetLgAmount">$199.95</td>
          <td className="WidgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgetLgUser">
            <img src="img/mohsen.jpg" alt="" className="WidgetLgImg" />
            <span className="WidgetLgName">Mohsen akbari</span>
          </td>
          <td className="WidgetLgDate">2 May 2022</td>
          <td className="WidgetLgAmount">$199.95</td>
          <td className="WidgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgetLgUser">
            <img src="img/mohsen.jpg" alt="" className="WidgetLgImg" />
            <span className="WidgetLgName">Mohsen akbari</span>
          </td>
          <td className="WidgetLgDate">2 May 2022</td>
          <td className="WidgetLgAmount">$199.95</td>
          <td className="WidgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </section>
  );
};

export default WidgetLg;
