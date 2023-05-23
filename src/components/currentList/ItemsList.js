import { useState } from "react";
import Card from "../UI/Card";
import Items from "./Items";
import "./ItemsList.css";
import FilterList from "./FilterList";

const ItemsList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredList = props.ItemsAbout.filter(
    (cur) => cur.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <FilterList
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      />
      {filteredList.length === 0 && (
        <h2 className="expenses-list__fallback">There no items</h2>
      )}

      {filteredList.length > 0 &&
        filteredList.map((expense) => (
          <Items
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default ItemsList;
