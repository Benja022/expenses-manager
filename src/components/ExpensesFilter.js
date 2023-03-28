import "./ExpensesFilter.css";
import { useEffect, useState } from "react";
import Wrapper from "./wrappers/Wrapper";
import { monthToString } from "../utils/monthToString";

function ExpensesFilter(props) {
  const [stats, setStats] = useState([0, 0]);
  const [month, setMonth] = useState(
    monthToString(new Date().toLocaleDateString())
  );
  const handleSelect = (e) => {
    setMonth(e.target.value);
    props.onSelectMonth(e.target.value);
  };
  useEffect(() => {
    setStats(props.onStats);
  }, [month, props.onStats]);
  return (
    <Wrapper
      content={
        <div className="chart">
          <div className="bars">
            <div className="label">
              <p>Incomes %</p>
              <div className="bar">
                <div
                  className="incomes"
                  style={{ width: `${stats[0]}%` }}
                ></div>
              </div>
            </div>
            <div className="label">
              <p>Expenses %</p>
              <div className="bar">
                <div
                  className="expenses"
                  style={{ width: `${stats[1]}%` }}
                ></div>
              </div>
            </div>
          </div>
          <form>
            <select name="month" onChange={handleSelect} value={month}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </form>
        </div>
      }
    />
  );
}

export default ExpensesFilter;
