/** @jsx jsx */
import { jsx } from "theme-ui";
import GatsbyImage from "gatsby-image";
import cardStyles from "./card.module.css";

const Card = ({
  id,
  handleClick,
  flipped,
  backImage,
  frontImage,
  disabled,
  solved
}) => {
  return (
    <div
      onClick={() => (disabled ? null : handleClick(id))}
      className={`${cardStyles.flipContainer} ${
        flipped ? cardStyles.flipped : null
      }`}
    >
      <div className={cardStyles.flipper}>
        <div
          sx={{
            width: 150,
            height: 150,
            cursor: "pointer"
          }}
        >
          <GatsbyImage
            sx={{
              width: "100%",
              height: "100%"
            }}
            fluid={flipped || solved ? frontImage : backImage}
            className={flipped ? cardStyles.front : cardStyles.back}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
