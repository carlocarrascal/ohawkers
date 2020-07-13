import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer>
      <Typography variant="overline" display="block" align="center">
        &copy; CopyRight 2020
      </Typography>
    </footer>
  );
}

export default Footer;
