import styled from "styled-components";

export const SearchResultWrapper = styled.div`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  & h3.title {
    font-size: var(--fz-heading-md);
    font-weight: 100;
    color: var(--grey-900);
    padding: 30px 0px;
  }
`;

export const DropdownContainer = styled.div`
  /* padding: 20px 0px; */
  /* background-color: bisque; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ResultGridContainer = styled.div`
  /* background-color: cadetblue; */
  width: 100%;
  display: grid;
  grid-gap: 30px;
  padding-top: 30px;
  padding: 20px 0px;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
  align-items: center;
  align-self: center;
  justify-self: center;
  width: 450px;

  & div.image {
    width: 100%;
    height: 280px;
    & img {
      width: 100%;
      height: 100%;
    }
  }

  & p.place_name {
    padding-top: 40px;
    font-size: var(--fz-lg);
    color: var(--grey-900);
  }

  & p.bedrrom_count {
    padding-top: 10px;
    font-size: var(--fz-sm);
    color: var(--grey-500);
  }

  & p.place_price {
    padding: 20px 0px;
    font-size: var(--fz-sm);
    color: black;
    font-weight: bold;
  }
`;
