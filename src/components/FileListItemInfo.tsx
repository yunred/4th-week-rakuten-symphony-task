import React from "react";
import styled from "styled-components";

const FileListItemInfo = () => {
  return (
    <>
      <FileListItem>
        <FileItemInfo>
          <span />
          <span>logo.png</span>
        </FileItemInfo>
        <FileItemSize>10.86KB</FileItemSize>
      </FileListItem>
    </>
  );
};

const FileListItem = styled.li`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileItemInfo = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  align-items: center;

  span:first-child {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    display: inline-block;
    background-image: url(/svgs/default.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const FileItemSize = styled.div``;

export default FileListItemInfo;
