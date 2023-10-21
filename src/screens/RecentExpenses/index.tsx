import { ExpensesOutput } from "../../components";
import { DUMMY_EXPENSES } from "../../data";

function RecentExpenses() {
  return (
    <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Last 7 days" />
  );
}

export { RecentExpenses };
