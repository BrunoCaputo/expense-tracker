import { View } from "react-native";
import { ExpensesList, ExpensesSummary } from "./components";
import { IExpense } from "../../model";

interface IExpensesOutputProps {
  expenses: IExpense[];
  expensesPeriod: string;
}

function ExpensesOutput({ expenses, expensesPeriod }: IExpensesOutputProps) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export { ExpensesOutput };
