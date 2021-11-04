import styled from "styled-components";

export const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: aqua; */
  padding: 0px 20px;

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

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & div.image {
    width: 100%;
    height: 250px;
    & img {
      width: 100%;
      height: 100%;
    }
  }

  & p.place_name {
    padding-top: 25px;
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
    font-size: var(--fz-md);
    color: black;
    font-weight: bold;
  }

  :hover {
    cursor: pointer;
  }
`;
