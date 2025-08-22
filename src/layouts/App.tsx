import useUpdateDeviceMode from "@hooks/useUpdateDeviceMode";
import useUpdateWindowDimensions from "@hooks/useUpdateWindowDimensions";
import Navbar from "src/components/Navbar";

interface Props {
  children: React.ReactNode;
}

const App: React.FC<Props> = ({ children }) => {
  useUpdateDeviceMode();
  useUpdateWindowDimensions();
  return (
    <>
      {/* <Flyout /> */}
      <header>
        <Navbar />
      </header>
      {children}
      {/* <Component {...pageProps} /> */}
      {/* <Footer /> */}
      {/* <Toast /> */}
    </>
  );
};

export default App;
