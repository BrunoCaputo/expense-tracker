import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { TCustomRootParamList } from "./src/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllExpenses, ManageExpense, RecentExpenses } from "./src/screens";
import { Colors } from "./src/styles";
import { Ionicons } from "@expo/vector-icons";

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator<TCustomRootParamList>();
const { Navigator: BottomTabNavigator, Screen: BottomTabScreen } =
  createBottomTabNavigator<TCustomRootParamList>();

function ExpensesOverview() {
  return (
    <BottomTabNavigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary400 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Colors.primary400 },
        tabBarActiveTintColor: Colors.accent500,
      }}
    >
      <BottomTabScreen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabScreen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabNavigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <StackNavigator>
          <StackScreen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <StackScreen name="ManageExpense" component={ManageExpense} />
        </StackNavigator>
      </NavigationContainer>
    </>
  );
}
