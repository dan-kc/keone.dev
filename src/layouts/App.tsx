import useUpdateDeviceMode from "@hooks/useUpdateDeviceMode";
import useUpdateWindowDimensions from "@hooks/useUpdateWindowDimensions";
import Flyout from "src/components/Flyout";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import Toast from "src/components/Toast";

interface Props {
  children: React.ReactNode;
  path: string;
}

const App: React.FC<Props> = ({ children, path }) => {
  useUpdateDeviceMode();
  useUpdateWindowDimensions();
  return (
    <>
      <Flyout path={path} />
      <header>
        <Navbar path={path} />
      </header>
      {children}
      <Footer path={path} />
      <Toast />
    </>
  );
};

export default App;
