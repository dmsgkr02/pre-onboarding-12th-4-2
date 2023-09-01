import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useAppSelector } from "../redux/hook";
import ErrorPage from "./ErrorPage";
import Loading from "../component/common/Loading";
import IssueListItem from "../component/issue/IssueListItem";
import { fetchIssueDetail } from "../redux/slices/issueDetail";
import { AppDispatch } from "../redux/store";
import ReactMarkdown from "react-markdown";
import { Container, Content } from "../styles/CommonStyle";

export default function IssueDetail() {
  const { issueNumber } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data, error } = useAppSelector((state) => state.issueDetail);
  
  useEffect(() => {
    dispatch(fetchIssueDetail(issueNumber));
  }, [dispatch, issueNumber]);

  if (error) {
    return <ErrorPage errorMesage={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Content>
        <IssueListItem issue={data} />
      </Content>
      <Content>
        <ReactMarkdown>{data?.body || ""}</ReactMarkdown>
      </Content>
    </Container>
  );
}
