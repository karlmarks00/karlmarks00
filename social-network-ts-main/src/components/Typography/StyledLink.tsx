import React from "react";
import { Link } from "react-router-dom";

type StyledLinkProps = {
  linkText: String;
  to: string;
};

export const StyledLink = ({ linkText, to }: StyledLinkProps) => {
  return (
    <>
      <Link to={to}>{linkText}</Link>
    </>
  );
};
