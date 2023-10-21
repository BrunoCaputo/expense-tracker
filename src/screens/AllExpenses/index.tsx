import { ExpensesOutput } from "../../components";
import { DUMMY_EXPENSES } from "../../data";

function AllExpenses() {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Total" />;
}

export { AllExpenses };
