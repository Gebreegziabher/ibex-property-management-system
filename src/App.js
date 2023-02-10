/*css #vendor*/
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";

/*react*/

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './containers/app-routes/app-routes';
import React from 'react';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import axios from "axios";

function App() {
  
  axios .defaults.baseURL='http://localhost:8081/api/v1/';

  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <AppRoutes/>
        <Footer />
        {/* <div id="preloader"></div> */}
        {/* <Link class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link> */}
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
