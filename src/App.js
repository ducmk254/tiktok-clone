import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';
import HeaderOnly from './components/Layouts/HeaderOnly';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoute.map((route, index) => {
              let Layout = DefaultLayout;
              if (route.layout === null) {
                Layout = Fragment;
              } else if (route.layout === HeaderOnly) {
                Layout = route.layout;
              }
              const Page = route.component;
              return <Route path={route.path} element={<Layout><Page /></Layout>} key={index} />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
