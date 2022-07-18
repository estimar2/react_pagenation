import React from "react";
import { Pagination } from "antd";

const Custom_Pagination = ({ total }) => {
  const _pageChange = page => {
    console.log(page, "pageChange");
  };

  return <Pagination defaultCurrent={1} total={total} onChange={_pageChange} />;
};

export default Custom_Pagination;
