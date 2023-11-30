import { Fragment } from "react";
import styled from "styled-components";

const BreadCrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding-block: 1rem;
  gap: 1rem;
  a,
  span,
  i {
    color: #a2a2a2;
    font-size: 1.4rem;
  }
  a {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
  i {
    font-size: 1.8rem;
  }
`;

interface IBreadCrumbs {
  data: {
    link: string;
    label: string;
  }[];
}

export default function BreadCrumbs(props: IBreadCrumbs) {
  const { data } = props;
  return (
    <BreadCrumbsContainer className="max-container">
      {data?.map((breadCrumbData, index) => (
        <Fragment key={breadCrumbData.label}>
          {breadCrumbData.link ? (
            <a>{breadCrumbData.label}</a>
          ) : (
            <span>{breadCrumbData.label}</span>
          )}
          {index !== data.length - 1 && (
            <i className="uil uil-angle-right-b"></i>
          )}
        </Fragment>
      ))}
    </BreadCrumbsContainer>
  );
}
