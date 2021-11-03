import React from "react";
import {
  Button,
  ContactContainer,
  DetailContainer,
  DetailsWrapper,
  FactsContainer,
  GridWrapper,
  IconContainer,
  PriceContainer,
} from "./DetailElements";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillHome } from "react-icons/ai";

const DetailPage = ({ data }) => {
  const images = data.Images
    ? data.Images.map((image) => image.url)
    : undefined;
  console.log("details", data);

  return (
    <DetailContainer>
      <GridWrapper>
        <div className="imageOne">
          <img
            src={images[0] && images[0]}
            alt={data.Images[0].alternativeText}
          />
        </div>
        <div className="imageTwo">
          <img
            src={images[1] && images[1]}
            alt={data.Images[1].alternativeText}
          />
        </div>
        <div className="imageThree">
          <img
            src={images[2] && images[2]}
            alt={data.Images[2].alternativeText}
          />
        </div>
        <DetailsWrapper>
          <IconContainer>
            <div className="icons">
              <AiOutlineHeart className="icon" size="30px" />
              {"  "}
              <AiOutlineShareAlt className="icon" size="30px" />
            </div>
          </IconContainer>
          <PriceContainer>
            <p className="priceDetails">
              <span className="price">$ {data.Price} </span>
              <span className="details">
                {data.Bedrooms} bed | {data.Floor_Area} sqm
              </span>
            </p>
            <p className="detail">
              {data.Bedrooms} bedroom {data.Building_Type} for sale in{" "}
              {data.Area.Name}
            </p>
            <p className="contact">
              <span>
                <AiFillHome />
              </span>{" "}
              Please contact us
            </p>
            <Button>CONTACT AGENT</Button>
          </PriceContainer>
          <FactsContainer>
            <p className="title"> FACTS & FEATURES</p>
            <div className="factDetailsContainer">
              <div className="factCaption">
                <p>Neighbourhood:</p>
                <p>Price per sqm:</p>
                <p>Brochure:</p>
                <p>Floor Plan:</p>
              </div>
              <div className="factValue">
                <p>{data.Area.Name}</p>
                <p>$ {data.Price_Per_Sqm}</p>
                <a
                  href={data.Brochure.length === 0 ? "#" : data.Brochure[0].url}
                >
                  Download Brochure
                </a>
                <a
                  href={
                    data.Floor_Plans.length === 0
                      ? "#"
                      : data.Floor_Plans[0].url
                  }
                  target={data.Floor_Plans.length === 0 ? "_self" : "_blank"}
                  rel="noreferrer"
                >
                  View FloorPlan
                </a>
              </div>
            </div>
            <p className="description">
              Superb and peaceful location in the part of {data.Area.Name}{" "}
              surrounded by the harbour and the sea. {data.Bedrooms} bedroom{" "}
              {data.Building_Type} with a lovely terrace spacious bedroom and
              kitchen. The residence includes concierge and a cellar.
            </p>
          </FactsContainer>
          <ContactContainer>
            <img
              src={data.Negotiator.Image.url}
              alt={data.Negotiator.Image.alternativeText}
            />
            <div className="wrapper">
              <p className="name">{data.Negotiator.Name}</p>
              <p className="designation">{data.Negotiator.Designation}</p>
              <p className="contactDetails">
                <span className="phone">+{data.Negotiator.Phone}</span> |{" "}
                <span className="email">
                  <a
                    href={`mailto:${data.Negotiator.Email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email
                  </a>
                </span>
              </p>
            </div>
          </ContactContainer>
        </DetailsWrapper>
      </GridWrapper>
    </DetailContainer>
  );
};

export default DetailPage;
