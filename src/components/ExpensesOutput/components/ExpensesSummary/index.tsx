import { Text, View } from "react-native";
import { IExpense } from "../../../../model";

interface IExpensesSummaryProps {
  expenses: IExpense[];
  periodName: string;
}

function ExpensesSummary({ expenses, periodName }: IExpensesSummaryProps) {
  const expensesSum: number = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export { ExpensesSummary };
