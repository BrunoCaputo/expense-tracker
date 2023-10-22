import { StyleSheet, Text, View } from "react-native";
import { IExpense } from "../../../../model";
import { Colors } from "../../../../styles";

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
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export { ExpensesSummary };

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: Colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
