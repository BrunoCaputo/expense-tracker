import { FlatList, ListRenderItemInfo, Text } from "react-native";
import { IExpense } from "../../../../model";

interface IExpensesListProps {
  expenses: IExpense[];
}

function ExpensesList({ expenses }: IExpensesListProps) {
  function renderExpenseItem({ item }: ListRenderItemInfo<IExpense>) {
    return <Text>{item.description}</Text>;
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
