import React, { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchIssueList } from "../redux/slices/issue";
import { useScroll } from "../hooks/useScroll";
import { Issue } from "../types";
import IssueListItem from "../component/issue/IssueListItem";
import Ad from "../component/Ad";
import Loading from "../component/common/Loading";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { Container, ListItem, UnorderdList } from "../styles/CommonStyle";

const scrollOffsetHeight = 30;

export default function IssueList() {
  const dispatch = useAppDispatch();
  const {
    loading,
    data: issueList,
    error,
    page,
    hasMore,
  } = useAppSelector((state) => state.issuesList);
  const { scrollHeight, scrollY } = useScroll();

  // useEffect(() => {
  //   issueList.length === 0 && dispatch(fetchIssueList(1));
  // }, [issueList.length, dispatch]);

  // useEffect(() => {
  //   if (loading || scrollY === scrollHeight || !hasMore) return;
  //   if (scrollY > scrollHeight - scrollOffsetHeight) {
  //     dispatch(fetchIssueList(page + 1));
  //     return;      
  //   }
  // }, [loading, page, issueList, scrollY, scrollHeight, issueList, dispatch, hasMore]);

  const nextIssueDispatch = useCallback(() => {
    if (loading || !hasMore) return;
    dispatch(
      fetchIssueList(page + 1),
    );
  }, [dispatch, hasMore, loading, page]);

  useEffect(() => {
    !issueList.length &&
      dispatch(
        fetchIssueList(page),
      );
  }, []);

  useEffect(() => {
    if (scrollY === scrollHeight) return;
    if (scrollY > scrollHeight - scrollOffsetHeight) {
      nextIssueDispatch();
      return;
    }
  }, [scrollY, scrollHeight, nextIssueDispatch]);

  if (error) {
    return <ErrorPage errorMesage={error} />;
  }

  return (
    <Container>
      <UnorderdList>
        {issueList.map((issue: Issue, index) => {
          return (
            <React.Fragment>
              <Link to={`${issue?.number}`}>
                <ListItem key={issue.id}>
                  <IssueListItem issue={issue} />
                </ListItem>
              </Link>
              {index % 4 === 3 && (
                <Link to={`https://www.wanted.co.kr/`}>
                  <ListItem key={issue.id + index}>
                    <Ad />
                  </ListItem>
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </UnorderdList>
      {loading && <Loading />}
    </Container>
  );
}
