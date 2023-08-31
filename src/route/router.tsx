import { createBrowserRouter } from "react-router-dom";
import IssueList from "../pages/IssueList"
import IssueDetail from "../pages/IssueDetail";
import Header from "../component/common/Header";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header organization={'facebook'} repository={'react'}/>,
    errorElement: <ErrorPage errorMesage={null}/>,
    children: [
      {
        path: '',
        element: <IssueList />,
      },
      {
        path: '/:issueNumber',
        element: <IssueDetail />,
      },
    ]
  },
]);