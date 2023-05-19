import Card from "../UI/Card";
import ItemDate from "./ItemDate";
import "./ItemsList.css";

const ItemsList = (props) => {
  return (
    <Card className="expenses">
      <div className="expense-item">
        <ItemDate DateAbout={props.ItemsAbout[0].date} />
        <div className="expense-item__description">
          <h2>{props.ItemsAbout[0].title}</h2>
          <div className="expense-item__price">
            ${props.ItemsAbout[0].amount}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ItemsList;
