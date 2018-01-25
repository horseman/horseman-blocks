import React from "react";
import PropTypes from "prop-types";

import { RichText, Picture, Container, TwoColumn } from "horseman-components";

const MediaBlock = ({
  mediaLocation,
  url,
  text: textArray,
}) => {
  const text = textArray && textArray[0];

	console.log("URL", url);
	console.log("text", text);

const MediaNode = (
    <Picture src={url} />
  );
  const ContentNode = (
	  <RichText html={text} />
  );

  const firstNode = mediaLocation === "right" ? ContentNode : MediaNode;
  const secondNode = firstNode === MediaNode ? ContentNode : MediaNode;

  /**
   * @TODO figure out  columnConfig={[{ basis: 50 }, { basis: 50 }]}
   * for wide prop
   */
  return (
    <Container size="large">
      <TwoColumn
        firstCol={firstNode}
        secondCol={secondNode}
      />
    </Container>
  );
};

MediaBlock.defaultProps = {
  breakpoint: "smAndUp",
};

MediaBlock.propTypes = {
  /**
   * Determines on which side the media will exist.
   */
  mediaLocation: PropTypes.oneOf(["left", "right"]).isRequired,

  /**
   * If given, one of the sides of the media block will be wider than the other
   */
  wide: PropTypes.oneOf(["left", "right", "neither"]),

  /**
   * A Header for the media block
   */
  header: PropTypes.string,

  /**
   * One side of the media block is RichText content. This is the html content
   * for the non-media side of this block
   */
  text: PropTypes.string.isRequired,

  url: PropTypes.string.isRequired,

  /**
   * At which breakpoint the TwoColumn will break
   */
  breakpoint: PropTypes.string,
};

export default MediaBlock;
