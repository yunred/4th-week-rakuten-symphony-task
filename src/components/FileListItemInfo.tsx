import React from "react";
import styled from "styled-components";
import * as T from "types";
import { sizeConverter } from "utils/DataConverter";

interface FileListProps {
  fileList: T.FileType[];
}

const FileListItemInfo: React.FC<FileListProps> = ({ fileList }) => {
  return (
    <>
      {fileList.map((item, idx) => {
        return (
          <FileListItem key={idx}>
            <FileItemInfo>
              <span />
              <span>{item.name}</span>
            </FileItemInfo>
            <FileItemSize>{sizeConverter(item.size)}</FileItemSize>
          </FileListItem>
        );
      })}
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
