import styled from 'styled-components'

export const StyledFormLoader = styled.div`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    max-width: 650px;
    width: 100%;
    padding: 30px;
  }

  .cards {
    display: flex;
  }

  .card {
    margin: 10px;
    max-width: 650px;
    width: 100vw;
    height: 100%;
    background-color: ${({ theme }) =>
      theme.id == 'light' ? theme.bga3 : theme.bgb1};
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

    .image {
      img {
        max-width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }

    .content {
      padding: 20px 30px;
    }
  }

  .card.is-loading {
    .image,
    h2,
    p {
      background: #eee;
      background: linear-gradient(
        110deg,
        ${({ theme }) => theme.bga3} 8%,
        ${({ theme }) => theme.bga2} 18%,
        ${({ theme }) => theme.bga1} 33%
      );
      border-radius: 5px;
      background-size: 200% 100%;
      ${({ theme }) => theme?.animation?.emphasis?.shineX};
    }

    .image {
      height: 200px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    h2 {
      height: 30px;
    }

    p {
      height: 70px;
    }
  }
`
