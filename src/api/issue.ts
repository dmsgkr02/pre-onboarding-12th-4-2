import instance from ".";
import { Issue } from "../types";

export const getIssueList = async (page:number, organization:string = `facebook`, repository:string = `react`) => {
  const response = await instance.get(`/${organization}/${repository}/issues`, {
    params:{ page: page, per_page: 10, sort:'comments'}
  });
  return response.data.map((issue: any) => {
    return({
      id: issue.id,
      number: issue.number,
      title: issue.title,
      comments: issue.comments,
      created_at: issue.created_at,
      login: issue.user.login,
      avatar_url: issue.user.avatar_url
    }) ;
  }) as Issue[];

}

export const getIssueDetail = async (issueNumber:string | undefined, organization:string = `facebook`, repository:string = `react`) => {
  const issue = (await instance.get((`/${organization}/${repository}/issues/${issueNumber}` ))).data;

  return {
    id: issue.id,
    number: issue.number,
    title: issue.title,
    comments: issue.comments,
    created_at: issue.created_at,
    login: issue.user.login,
    avatar_url: issue.user.avatar_url,
    body: issue.body,
  } as Issue
}

