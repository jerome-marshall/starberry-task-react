import styled from "styled-components";

export const DetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* min-width: 100%; */
  padding: 20px;
`;

export const GridWrapper = styled.div`
  /* background-color: aquamarine; */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(12, min-content);
  grid-auto-columns: 100px;

  & div.imageOne {
    grid-column: 1 / 9;
    grid-row: 1 / 8;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & div.imageTwo {
    grid-column: 1 / 5;
    grid-row: 8 / 13;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & div.imageThree {
    grid-column: 5 / 9;
    grid-row: 8 / 13;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  justify-content: flex-start;
  padding-left: 10px;
  /* background-color: brown; */
  grid-column: 9 / 14;
  grid-row: 1 / 13;
  width: 100%;
  height: 100%;
`;

export const IconContainer = styled.div`
  position: relative;
  height: 60px;
  /* align-self: flex-end; */
  border-bottom: 2px solid gray;

  & div.icons {
    position: absolute;
    right: 10px;
    /* top: 5px; */
    align-self: center;
  }
`;

export const iconStyle = {
  size: "20px",
};

export const PriceContainer = styled.div`
  padding: 20px 0px;

  & p.priceDetails {
    padding-top: 10px;
    & span.price {
      font-size: var(--fz-lg);
      font-weight: bold;
      padding-right: 10px;
    }
  }

  & p.detail {
    font-size: var(--fz-md);
    color: var(--grey-900);
    padding: 15px 0px;
  }

  & p.contact {
    font-size: var(--fz-sm);
    color: #bdb008;
    font-weight: bold;
    text-decoration: underline;
    padding-bottom: 15px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  color: #eee;
  background: #111;
  width: 100%;
  font-size: var(--fz-sm);
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: solid white;
  padding: 1.25rem 1.75rem;
  transition: var(--transition);

  &:hover {
    background: #444;
    /* color: #010606; */
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 1.5rem;
  }
`;

export const FactsContainer = styled.div`
  & p.title {
    font-size: var(--fz-md);
    padding: 15px 0px;
    border-bottom: 2px solid gray;
  }

  & div.factDetailsContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 15px 0px;

    & div.factCaption {
      font-weight: bold;
      font-size: var(--fz-sm);

      > p {
        padding-bottom: 10px;
      }
    }

    & div.factValue {
      font-size: var(--fz-sm);
      color: var(--grey-900);

      > p {
        padding-bottom: 10px;
      }

      > a {
        display: inline-block;
        color: inherit;
        padding-bottom: 10px;
      }
    }
  }

  & p.description {
    padding-top: 10px;
    font-size: var(--fz-sm);
    line-height: 25px;
    color: var(--grey-900);
  }
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 50px 0px;
  grid-template-rows: 100px;
  & img {
    height: 100%;
    /* width: 90px; */
  }

  & div.wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
    /* justify-content: space-between; */

    & p.name {
      font-size: var(--fz-md);
      font-weight: bold;
      padding-bottom: 10px;
    }

    & p.designation {
      font-size: var(--fz-sm);
      /* font-weight: bold; */
      padding-bottom: 20px;
    }

    & p.contactDetails {
      font-size: var(--fz-md);
      color: var(--grey-900);

      & a {
        color: inherit;
      }
    }
  }
`;
