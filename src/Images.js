// This file renders when there are images to show.

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default (props) =>
  // Loops through the images
  props.images.map((image, i) => (
    <div key={i} className="fadein">
      {/* Delete image */}
      <div
        onClick={() => props.removeImage(image.public_id)}
        className="delete"
      >
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />
      </div>
      <img src={image.secure_url} alt="" />
    </div>
  ));
