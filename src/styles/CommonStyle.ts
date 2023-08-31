import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
`;

export const CenterContainer = styled.header`
  display: flex;
  justify-content: center;
`;

export const IssueItemContainer = styled.div`
  margin: 15px;
  padding-bottom: 15px;
  display: flex;
  div {
    padding: 5px;
  }
`;
export const IssueItemDescription = styled.div`
  flex: 4;
`;
export const IssueItemComments = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;
export const IssueItemTitle = styled.div`
  font-size: 1.1rem;
`;

export const IssueItemLogIn = styled.div`
  font-size: 0.8rem;
`;

export const ADImageStyle = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 700px;
  margin: 0 auto;
  border: 1px solid gray;
`;
export const Content = styled.div`
  border: 1px solid gray;
  padding: 20px;
`;
export const UnorderdList = styled.ul`
  border: 1px solid gray;
`;

export const ListItem = styled.li`
  padding: 8px 16px;
  border-bottom: 1px solid gray;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
