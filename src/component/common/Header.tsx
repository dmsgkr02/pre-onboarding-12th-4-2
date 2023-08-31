import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderStyle } from "../../styles/CommonStyle";

type Props = {
  organization: string | undefined;
  repository: string | undefined;
};

export default function Header({ organization, repository }: Props) {
  return (
    <>
      <HeaderStyle>
        <h1>
          {organization} / {repository}
        </h1>
      </HeaderStyle>
      <Outlet />
    </>
  );
}
