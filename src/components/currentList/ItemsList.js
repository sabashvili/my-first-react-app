import Card from "../UI/Card";
import FilterList from "./FilterList";
import ItemDate from "./ItemDate";
import "./ItemsList.css";

const ItemsList = (props) => {
  return (
    <Card className="expenses">
      <FilterList />
      <Card className="expense-item">
        <ItemDate DateAbout={props.ItemsAbout[0].date} />
        <div className="expense-item__description">
          <h2>{props.ItemsAbout[0].title}</h2>
          <div className="expense-item__price">${props.ItemsAbout[0].amount}</div>
        </div>
      </Card>

      <Card className="expense-item">
        <ItemDate DateAbout={props.ItemsAbout[1].date} />
        <div className="expense-item__description">
          <h2>{props.ItemsAbout[1].title}</h2>
          <div className="expense-item__price">${props.ItemsAbout[1].amount}</div>
        </div>
      </Card>

      <Card className="expense-item">
        <ItemDate DateAbout={props.ItemsAbout[2].date} />
        <div className="expense-item__description">
          <h2>{props.ItemsAbout[2].title}</h2>
          <div className="expense-item__price">${props.ItemsAbout[2].amount}</div>
        </div>
      </Card>

      <Card className="expense-item">
        <ItemDate DateAbout={props.ItemsAbout[3].date} />
        <div className="expense-item__description">
          <h2>{props.ItemsAbout[3].title}</h2>
          <div className="expense-item__price">${props.ItemsAbout[3].amount}</div>
        </div>
      </Card>
    </Card>
  );
};

export default ItemsList;
