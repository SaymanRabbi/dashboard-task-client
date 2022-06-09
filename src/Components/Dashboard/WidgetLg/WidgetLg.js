import { useQuery } from "react-query";
import "./widgetLg.css";

export default function WidgetLg() {
  const { data, isLoading } = useQuery('users', () => fetch('http://localhost:5000/employee').then(res => res.json()))
  if (isLoading) {
    return
  }
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {
          data.map(user => <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src={user.avatar}
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{user.first_name + user.last_name}</span>
            </td>
            <td className="widgetLgDate">{user.email}</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>)
        }


      </table>
    </div>
  );
}
