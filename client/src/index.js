import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// React Router v6 imports
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Custom compoments
import App from './app';

// Utilities
import { 
  PortfolioPage,
  HomePage,
  WorkPlaceLearningPage,
  CurriculumPage,
  TeamPage,
  BlogsPage,
} from './app/pages';
import { AuthProvider, GraphCMSProvider } from './app/context';
import { AdminLayout, PublicLayout, UserLayout } from './app/components/layout';

ReactDOM.render(
  <GraphCMSProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<HomePage />} />
              <Route path="curriculum" element={<CurriculumPage />} />
              <Route path="portfolio" element={<PortfolioPage />} /> 
              <Route path="workplacelearning" element={<WorkPlaceLearningPage />} /> 
              <Route path="team" element={<TeamPage />} /> 
              <Route path="blogs" element={<BlogsPage />} /> 
            </Route>            
            <Route path="user" element={<UserLayout />}>
              <Route index element ={<HomePage/>} />
              <Route path="profile" element ={<CurriculumPage/>} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
              <Route index element ={<HomePage/>} />
              <Route path="posts" element ={<CurriculumPage/>} />
            </Route>
            <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
          </Route>
        </Routes>
      </BrowserRouter>   
    </AuthProvider> 
  </GraphCMSProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
