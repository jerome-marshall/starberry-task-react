import React from "react";
import { useHistory } from "react-router-dom";
import {
  GridItem,
  ResultGridContainer,
  SearchResultWrapper,
} from "./SearchResultElements";
import FadeIn from "react-fade-in";

const SearchResultPage = ({ data, setSelectedIndex }) => {
  const history = useHistory();

  const onItemClick = (item, index) => {
    setSelectedIndex(index);
    history.push("detail");
  };

  // render page only if data is not empty
  return data[0] === undefined ? (
    <p>Loading...</p>
  ) : (
    <FadeIn delay="0" transitionDuration="1000">
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
          {/* validate data and dynamically render the items */}
          {data &&
            data.map((place, index) => {
              const images = place.Images;

              return (
                <FadeIn delay="300" transitionDuration="1000" key={place.id}>
                  <GridItem
                    key={place.id}
                    onClick={() => onItemClick(place, index)}
                  >
                    <div className="image">
                      {images && images.length > 0 ? (
                        <img src={images[0].url && images[0].url} alt=""></img>
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
                </FadeIn>
              );
            })}
        </ResultGridContainer>
      </SearchResultWrapper>
    </FadeIn>
  );
};

export default SearchResultPage;
