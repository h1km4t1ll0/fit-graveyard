import MainPage from "./components/MainPage";
import {StoreProvider} from "./components/store/StoreContext";
import AnimatedBackground from "./components/shared/AnimatedBackground";
import {AlertProvider} from "./components/shared/Alert";

function App() {
  return (
    <AlertProvider>
      <StoreProvider>
        <AnimatedBackground/>
        <MainPage/>
      </StoreProvider>
    </AlertProvider>
  );
}

export default App
