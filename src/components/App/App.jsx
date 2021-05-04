import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppWithRoutes from "./AppWithRoutes";
import PreloaderInitializationApplication from "../Preloaders/PreloaderInitializationApplication";

const App = (props) => {
  const {authMe, initializeTheApplication, initialize} = props;

  useEffect(() => {
    (async () => {
           await authMe();
           initializeTheApplication(true);
    })();
  }, [authMe, initializeTheApplication]);

  if (!initialize) return <PreloaderInitializationApplication />;
  
  return (<>
            {initialize && <AppWithRoutes />}
          </>
  );
}

App.propTypes = {
  authMe: PropTypes.func.isRequired,
  initializeTheApplication: PropTypes.func.isRequired,
  initialize: PropTypes.bool.isRequired,
};

export default App;