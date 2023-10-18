import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { TCustomRootParamList } from "./src/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllExpenses, ManageExpense, RecentExpenses } from "./src/screens";

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator<TCustomRootParamList>();
const { Navigator: BottomTabNavigator, Screen: BottomTabScreen } =
  createBottomTabNavigator<TCustomRootParamList>();

function ExpensesOverview() {
  return (
    <BottomTabNavigator>
      <BottomTabScreen name="RecentExpenses" component={RecentExpenses} />
      <BottomTabScreen name="AllExpenses" component={AllExpenses} />
    </BottomTabNavigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <StackNavigator>
          <StackScreen name="ExpensesOverview" component={ExpensesOverview} />
          <StackScreen name="ManageExpense" component={ManageExpense} />
        </StackNavigator>
      </NavigationContainer>
    </>
  );
}
