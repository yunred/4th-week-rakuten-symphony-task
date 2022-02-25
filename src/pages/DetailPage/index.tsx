import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import Button from "components/Button";
import FileListItemInfo from "components/FileListItemInfo";
import { useParams } from "react-router-dom";
import * as C from "constant";
import * as U from "utils/DataConverter";
import * as T from "types";
interface DetailePageProps {
  LinkFileData: T.FetchDataType[];
  keyArr: Array<string | undefined>;
}

const handleOnClick = () => {
  window.alert("다운로드 되었습니다.");
};
const handleBackRoute = () => {
  window.alert("잘못된 접근입니다.");
  window.location.replace("/");
};

const DetailPage: React.FC<DetailePageProps> = ({ LinkFileData, keyArr }) => {
  const { key } = useParams();
  let DetailData: T.FetchDataType = LinkFileData[keyArr.indexOf(key)];
  return (
    <>
      {U.isValid(DetailData.expires_at) ? (
        <>
          <Header>
            <LinkInfo>
              <Title>
                {DetailData.sent ? DetailData.sent.subject : "\u00a0"}
              </Title>
              <Url>{window.location.href}</Url>
            </LinkInfo>
            <DownloadButton onClick={handleOnClick}>
              <img
                referrerPolicy="no-referrer"
                src="/svgs/download.svg"
                alt=""
              />
              받기
            </DownloadButton>
          </Header>
          <Article>
            <Descrition>
              <Texts>
                <Top>링크 생성일</Top>
                <Bottom>
                  {U.DateConverter(DetailData.created_at + C.TIMEREVISION)}
                </Bottom>
                <Top>메세지</Top>
                <Bottom>
                  {DetailData.sent ? DetailData.sent.content : "\u00a0"}
                </Bottom>
                <Top>다운로드 횟수</Top>
                <Bottom>{DetailData.download_count}</Bottom>
              </Texts>
              <LinkImage>
                {DetailData.thumbnailUrl.slice(
                  DetailData.thumbnailUrl.length - 3
                ) === "svg" ? (
                  <Image
                    style={{
                      backgroundImage: `url(/svgs/default.svg)`,
                    }}
                  />
                ) : (
                  <Image
                    style={{
                      backgroundImage: `url(${DetailData.thumbnailUrl.slice(
                        32
                      )})`,
                    }}
                  />
                )}
              </LinkImage>
            </Descrition>
            <ListSummary>
              <div>총 {DetailData.count}개의 파일</div>
              <div>{U.sizeConverter(DetailData.size)}</div>
            </ListSummary>
            <FileList>
              <FileListItemInfo fileList={DetailData.files} />
            </FileList>
          </Article>
        </>
      ) : (
        <>{handleBackRoute()}</>
      )}
    </>
  );
};

const Header = styled.header`
  display: flex;
  color: ${colors.grey600};
  margin-bottom: 32px;
`;

const LinkInfo = styled.div`
  overflow: hidden;
  flex-grow: 1;
`;

const Title = styled.h3`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  color: ${colors.grey700};
  font-size: 20px;
`;

const Url = styled.a`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  text-decoration: underline;
  line-height: 20px;
  font-size: 14px;

  :hover {
    color: ${colors.teal700};
  }
`;

const DownloadButton = styled(Button)`
  font-size: 16px;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`;

const Article = styled.article`
  border-radius: 4px;
  border-color: ${colors.grey200};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 0 0 1px rgb(0 20 61 / 8%), 0 3px 3px 0 rgb(0 20 61 / 4%);
  background-color: ${colors.white};
  color: ${colors.grey600};
  font-size: 14px;
  font-weight: 400;
`;

const Descrition = styled.div`
  display: flex;
  padding: 36px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 24px;
  }
`;

const Texts = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Top = styled.label`
  font-weight: 600;
  line-height: 20px;
`;

const Bottom = styled.p`
  color: ${colors.grey700};
  margin: 8px 0 24px;
`;

const LinkImage = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  background-color: ${colors.grey50};

  @media (max-width: 768px) {
    margin-bottom: 32px;
    max-width: 100%;
  }
`;

const Image = styled.span`
  width: 120px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom: 100%;
`;

const ListSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 36px;
  font-weight: 600;
  border-top: 1px solid;
  border-color: ${colors.grey200};

  @media (max-width: 768px) {
    padding: 12px 24px;
  }
`;

const FileList = styled.ul`
  border-top: 1px solid;
  border-color: ${colors.grey200};
  padding: 0;
  margin: 0;
  padding: 0 36px;
  color: ${colors.grey700};

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  & > li + li {
    border-top: 1px solid;
    border-color: ${colors.grey200};
  }
`;

export default DetailPage;
