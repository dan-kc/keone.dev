import useUpdateDeviceMode from "@hooks/useUpdateDeviceMode";
import useUpdateWindowDimensions from "@hooks/useUpdateWindowDimensions";
import Navbar from "src/components/Navbar";

interface Props {
  children: React.ReactNode;
  path: string;
}

const App: React.FC<Props> = ({ children, path }) => {
  useUpdateDeviceMode();
  useUpdateWindowDimensions();
  return (
    <>
      {/* <Flyout /> */}
      <header>
        <Navbar path={path} />
      </header>
      {children}
      {/* <Component {...pageProps} /> */}
      {/* <Footer /> */}
      {/* <Toast /> */}
    </>
  );
};

export default App;
