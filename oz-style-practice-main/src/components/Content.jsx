import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 5px;
  flex-wrap: nowrap;

  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    font-size: 12px;
    color: #d7fa00;
    border: 1px solid #d7fa00;
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    color: rgb(160, 160, 160);
  }
`;

export default function Content({ content }) {
  return (
    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
