import CustomHookComponent from "./CustomHookComponent";
import TestComponent from "./EvenMoreReactComponent";
import TryComponent from "./TryComponent";
import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import UseStateComponent from "./UseStateComponent";

export default function App() {
  return (
    <div>
      <h1>MY TRY</h1>
      <TryComponent />
      <h1>Even More React Component</h1>
      <TestComponent />
      <h1>Custom Hook</h1>
      <CustomHookComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
      <UseStateComponent />
    </div>
  );
}