import ItemDate from "./ItemDate";
import Card from "../UI/Card";
import "./Items.css";

const Items = (props) => {
  return (
    <Card className="expense-item">
      <ItemDate DateAbout={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default Items;
