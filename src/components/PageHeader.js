import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const PageHeader = ({ title }) => {
  const history = useNavigate();
  return (
    <div className="page-header">
      <button className="back-icon" type="button" onClick={() => history(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <center>
        <span className="title">
          {title}
        </span>
      </center>
      <span />
    </div>
  );
};

PageHeader.defaultProps = {
  title: '',
};

PageHeader.propTypes = {
  title: PropTypes.string,
};

export default PageHeader;
