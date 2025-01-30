import "./App.css";
import { useDevice } from "./hooks/device-hook";

interface IAppProps {
  mobile: React.ReactNode;
  pc: React.ReactNode;
}

function App({ mobile, pc }: IAppProps) {
  const { CheckResponsive } = useDevice();
  const isMobile = CheckResponsive();

  return <>{isMobile ? <>{mobile}</> : <>{pc}</>}</>;
}

export default App;
