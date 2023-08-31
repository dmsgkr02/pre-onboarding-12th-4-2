import { createBrowserRouter } from "react-router-dom";
import IssueList from "../pages/IssueList"
import IssueDetail from "../pages/IssueDetail";
import Header from "../component/common/Header";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header organization={'facebook'} repository={'react'}/>,
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