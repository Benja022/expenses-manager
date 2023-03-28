import "./ItemCost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";

const sing = {
  plus: {
    entity: "&#43",
    unicode: "\u002b",
  },
  minus: {
    entity: "&#8722",
    unicode: "\u2212",
  },
};

function ItemCost(props) {
  return (
    <div className={`item-cost flex-20 ${(props.money.income && "income") || "expense" } fa-3x flex-center`}>
      <span>
        {(props.money.income && sing.plus.unicode) || sing.minus.unicode}$
        {props.money.amount}
      </span>
      <FontAwesomeIcon
        icon={(props.money.income && faArrowUpLong) || faArrowDownLong}
        className="m-left20"
      />
    </div>
  );
}

export default ItemCost;
