import React from 'react'
import { Issue } from '../../types'
import { IssueItemContainer, IssueItemDescription, IssueItemComments, IssueItemTitle, IssueItemLogIn } from '../../styles/CommonStyle'

type Props = {
  issue: Issue
}

export default function IssueListItem({ issue }: Props) {
  
  return (
    <li >
      <IssueItemContainer >
        <IssueItemDescription>
          <IssueItemTitle >
            #{issue.number} {issue.title}
          </IssueItemTitle>
          <IssueItemLogIn>
            작성자: {issue.login}, 작성일: {issue.created_at}
          </IssueItemLogIn>
        </IssueItemDescription>
        <IssueItemComments>
          코멘트: {issue.comments}
        </IssueItemComments>
        <IssueItemComments>
          <img src={issue.avatar_url} alt="아바타 이미지" />
        </IssueItemComments>
      </IssueItemContainer>
    </li>
  )
}

