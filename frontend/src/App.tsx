import React from "react";
import ReduxToastr from 'react-redux-toastr'
import "./App.css";
import { ToastProvider } from "react-toast-notifications";
import { FilteredBoard } from "./ui/Board";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { ConnectedPanel } from "./ui/SidePanel";
import { Skeleton } from "./ui/Skeleton";
import { ConnectedPainter } from "./ui/PaintManager";

const App: React.FC = () => {
  const Mainboard = (
    <>
      <ConnectedPainter />
      <FilteredBoard />
    </>
  );

  return (
    <Provider store={store}>
      <ToastProvider>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick />
        <Skeleton board={Mainboard} side={<ConnectedPanel />} />
      </ToastProvider>
    </Provider>
  );
};

export default App;
