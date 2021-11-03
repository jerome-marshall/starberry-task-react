import React from "react";
import { useHistory } from "react-router-dom";
import {
  GridItem,
  ResultGridContainer,
  SearchResultWrapper,
} from "./SearchResultElements";

const SearchResultPage = ({ data, setSelectedIndex }) => {
  const history = useHistory();

  console.log("in asdj", data[0]);

  const onItemClick = (item, index) => {
    setSelectedIndex(index);
    history.push("detail");
  };

  return data[0] === undefined ? (
    <p>Loading...</p>
  ) : (
    <SearchResultWrapper>
      <h3 className="title">Property for Sales</h3>
      {/* <DropdownContainer>
        <Dropdown
          options={options}
          // onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
      </DropdownContainer> */}

      <ResultGridContainer>
        {data &&
          data.map((place, index) => {
            const images = place.Images;

            return (
              <GridItem
                key={place.id}
                onClick={() => onItemClick(place, index)}
              >
                <div className="image">
                  {images && images.length > 0 ? (
                    <img
                      src={images[0].url && images[0].url}
                      alt={place.Title}
                    ></img>
                  ) : (
                    place.Title
                  )}
                </div>

                <p className="place_name">{place.Title}</p>
                <p className="bedrrom_count">
                  {place.Bedrooms} bedroom {place.Building_Type} for sale
                </p>
                <p className="place_price">$ {place.Price}</p>
              </GridItem>
            );
          })}
      </ResultGridContainer>
    </SearchResultWrapper>
  );
};

export default SearchResultPage;
