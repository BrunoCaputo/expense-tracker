import { FlatList, ListRenderItemInfo } from "react-native";
import { IExpense } from "../../../../model";
import { ExpenseItem } from "./components";

interface IExpensesListProps {
  expenses: IExpense[];
}

function ExpensesList({ expenses }: IExpensesListProps) {
  function renderExpenseItem({ item }: ListRenderItemInfo<IExpense>) {
    return <ExpenseItem {...item} />;
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export { ExpensesList };
