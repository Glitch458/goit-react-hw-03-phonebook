import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, inputChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={value}
        onChange={inputChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default Filter;
