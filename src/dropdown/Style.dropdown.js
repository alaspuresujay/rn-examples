import { StyleSheet } from 'react-native';

const BORDER_COLOR = '#C5C5C5';
const styles = StyleSheet.create({
  dropdownContainer: {
    width: '100%',
  },
  labelWrapper: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  inputWrapper: {
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    padding: 10,
  },
  popupContainer: {
    position: 'absolute',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  popupItem: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingVertical: 8,
    borderBottomWidth: 0.7,
    borderBottomColor: BORDER_COLOR,
  },
  popupItemText: {},
});

export default styles;
