import React from "react";
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "styles/colors";
import Avatar from "components/Avatar";
import * as T from "types";

interface FileTableRowProps{
  FetchData: T.FetchDataType
}

const FileTableRow: FC<FileTableRowProps> = ({FetchData}) => {
    return(
      <TableRow>
        <TableCell>
          <LinkInfo>
            <LinkImage>
              <img
                referrerPolicy="no-referrer"
                src={FetchData.thumbnailUrl.slice(32)}
                alt=""
              />
            </LinkImage>
            <LinkTexts>
              <LinkTitle>{FetchData.key}</LinkTitle>
              <LinkUrl>{window.location.href}{FetchData.key}</LinkUrl>
            </LinkTexts>
          </LinkInfo>
          <span />
        </TableCell>
        <TableCell>
          <span>파일개수</span>
          <span>{FetchData.count}</span>
        </TableCell>
        <TableCell>
          <span>파일사이즈</span>
          <span>{FetchData.size}</span>
        </TableCell>
        <TableCell>
          <span>유효기간</span>
          <span>48시간 00분</span>
        </TableCell>
        <TableCell>
          <span>받은사람</span>
          <LinkReceivers>
            {
              FetchData.sent? FetchData.sent.emails.map((emails, index) =>
            <Avatar key={index} text={emails} />
              ):<></>
            }
          </LinkReceivers>
        </TableCell>
      </TableRow>);
          
}

export default FileTableRow;

const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0px;
  font-weight: inherit;
  font-size: inherit;
`;

const TableCell = styled.th`
  font-weight: inherit;
  font-size: inherit;
  font-size: 12px;
  line-height: 24px;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid ${colors.grey300};
  text-align: left;
  padding: 16px;
`;

const LinkInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LinkImage = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
  }
`;

const LinkTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;

  & > * {
    margin: 0;
  }
`;

const LinkTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey700};
`;

const LinkUrl = styled.a`
  text-decoration: underline;

  :hover {
    color: ${colors.teal700};
  }
`;

const LinkReceivers = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;