import PropTypes from 'prop-types';

export const ErrorMessage = ({message}) => {
  return (
    <div>{message}</div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string
};
