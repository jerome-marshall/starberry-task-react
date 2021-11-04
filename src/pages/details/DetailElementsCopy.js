import styled from "styled-components";

export const DetailContainer = styled.div`
  position: relative;
  min-height: 100;
  /* min-width: 100%; */
  padding: 20px 20px 50px 20px;
`;

export const GridWrapper = styled.div`
  position: relative;
  /* background-color: aquamarine; */
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-auto-columns: 100px;
  height: 600px;

  & div.imageOne {
    height: 350px;
    grid-column: 1 / 9;
    grid-row: 1 / 8;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & div.imageTwoThree {
    /* background-color: blue; */
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;
    max-height: 200px;
    grid-column: 1 / 9;
    grid-row: 8 / 13;

    & img {
      width: 100%;
      height: 100%;
    }

    & span.imageTwo {
      padding-right: 10px;
    }

    & span.imageThree {
      padding-left: 10px;
    }
  }

  /* & div.imageThree {
    grid-column: 5 / 9;
    grid-row: 8 / 13;

    & img {
      width: 100%;
      height: 100%;
    } 
  } */

  @media screen and (max-width: 700px) {
    display: block;
    /* flex-direction: column; */

    & div.imageOne {
      padding-bottom: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    & div.imageOne {
      height: 270px;
    }
  }
`;

export const DetailsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: stretch;
  padding-left: 10px;
  /* background-color: brown; */
  grid-column: 9 / 15;
  grid-row: 1 / 13;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 700px) {
    padding-top: 20px;
  }
`;

export const IconContainer = styled.div`
  /* background-color: aquamarine; */
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
  justify-content: flex-end;
  min-height: auto;
  /* position: relative; */
  /* align-self: flex-end; */
  border-bottom: 2px solid gray;

  & div.icons {
    position: relative;

    right: 10px;
    /* top: 5px; */
    align-self: center;
  }
`;

export const PriceContainer = styled.div`
  padding: 15px 0px;

  & p.priceDetails {
    padding-top: 8px;
    & span.price {
      font-size: var(--fz-lg);
      font-weight: bold;
      padding-right: 10px;
    }
  }

  & p.detail {
    font-size: var(--fz-md);
    color: var(--grey-900);
    padding: 10px 0px;
  }

  & p.contact {
    font-size: var(--fz-sm);
    color: #bdb008;
    font-weight: bold;
    text-decoration: underline;
    padding-bottom: 10px;
  }
`;

export const Button = styled.button`
  margin: 5px;
  color: #eee;
  background: #111;
  width: 100%;
  font-size: var(--fz-sm);
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: solid white;
  padding: 10px 20px;
  transition: var(--transition);

  &:hover {
    background: #444;
    /* color: #010606; */
  }
`;

export const FactsContainer = styled.div`
  & p.title {
    font-size: var(--fz-md);
    padding: 10px 0px;
    border-bottom: 2px solid gray;
  }

  & div.factDetailsContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px 0px;

    & div.factCaption {
      font-weight: bold;
      font-size: var(--fz-sm);

      > p {
        padding-bottom: 8px;
      }
    }

    & div.factValue {
      font-size: var(--fz-sm);
      color: var(--grey-900);

      > p {
        padding-bottom: 8px;
      }

      > a {
        display: block;
        color: inherit;
        padding-bottom: 8px;
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
  /* height: 30px; */
  display: flex;
  min-width: 0px;
  padding: 20px 0px;
  grid-template-rows: 100px;
  & img {
    height: 90px;
    width: 80px;
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
