import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Style.dropdown';
import DropdownModal from './DropdownModal';

export default function DropDown({ label, options, value, onChangeText, placeholder, isRequired }) {
  const [currentValue, setCurrentValue] = useState('');
  const DropdownRef = useRef();

  // const [options, setOptions] = useState(rawData);
  const [isOpen, setIsOpen] = useState(false);
  const [popUpSize, setPopUpSize] = useState({
    width: 0,
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleChange = (text) => {
    setCurrentValue(text);
    onChangeText(text);
  };
  const handleSelect = (item) => {
    handleChange(item.value);
    setIsOpen(false);
  };

  const togglePopup = () => {
    DropdownRef.current.measure((_fx, _fy, _w, h, _px, py) => {
      setPopUpSize({
        width: _w,
        top: parseInt(py, 10) + parseInt(h, 10),
        bottom: py,
      });
    });
    setIsOpen(!isOpen);
  };
  return (
    <View style={styles.dropdownContainer} ref={DropdownRef}>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{label}</Text>
        {isRequired && <Text style={[styles.label, { color: '#F62D21' }]}>*</Text>}
      </View>
      <TextInput
        onChangeText={handleChange}
        onPressIn={togglePopup}
        style={styles.inputWrapper}
        placeholder={placeholder}
        value={currentValue}
      />
      <DropdownModal
        onSelect={handleSelect}
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        options={options}
        popUpSize={popUpSize}
      />
    </View>
  );
}

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

DropDown.defaultProps = {
  value: '',
  placeholder: '',
  isRequired: false,
};
