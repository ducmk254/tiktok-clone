import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoute.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
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
