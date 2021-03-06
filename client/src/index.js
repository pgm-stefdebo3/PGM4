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
  CurriculumPage,
  TeamPage,
  BlogsPage,
  BlogDetailsPage,
  PostDetailsPage,
  LoginPage,
  SearchPage,
  ServicesPage
} from './app/pages';
import { AuthProvider, GraphCMSProvider } from './app/context';
import { PublicLayout } from './app/components/layout';

ReactDOM.render(
  <GraphCMSProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="curriculum" element={<CurriculumPage />} />
              <Route path="portfolios/:memberId" element={<PortfolioPage />} />
              <Route path="team" element={<TeamPage />} /> 
              <Route path="services" element={<ServicesPage />} />
              <Route path="blogs" element={<BlogsPage />} />
              <Route path="blogs/:blogId" element={<BlogDetailsPage />}/>
              <Route path="posts/:postId" element={<PostDetailsPage />}/>
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
