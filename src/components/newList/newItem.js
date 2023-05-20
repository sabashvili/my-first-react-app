import ItemForm from "./ItemForm";
import "./newItem.css";

const NewItem = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ItemForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewItem;
