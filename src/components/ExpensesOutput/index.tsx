import { StyleSheet, View } from "react-native";
import { ExpensesList, ExpensesSummary } from "./components";
import { IExpense } from "../../model";
import { Colors } from "../../styles";

interface IExpensesOutputProps {
  expenses: IExpense[];
  expensesPeriod: string;
}

function ExpensesOutput({ expenses, expensesPeriod }: IExpensesOutputProps) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export { ExpensesOutput };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: Colors.primary700,
  },
});
