import { View, Text, Modal, Pressable, Dimensions, FlatList } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Style.dropdown';

const { height: screenHeight } = Dimensions.get('window');
const MAX_HEIGHT = 140;

export default function DropdownModal({ visible, onClose, options, popUpSize, onSelect }) {
  let shouldBottom = true;
  if (MAX_HEIGHT > screenHeight - popUpSize.top) shouldBottom = false;
  const top = !shouldBottom ? popUpSize.bottom - 41 * (options?.length || 0) : popUpSize.top;
  return (
    <Modal visible={visible} transparent animationType="none">
      <Pressable onPress={onClose} style={{ flex: 1, alignItems: 'center' }}>
        <View style={[styles.popupContainer, { top, width: popUpSize.width }]}>
          <FlatList
            data={options}
            style={{ maxHeight: MAX_HEIGHT }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable style={{ zIndex: 500 }} key={item.id} onPress={() => onSelect(item)}>
                <DropDownItems title={item.value} />
              </Pressable>
            )}
          />
        </View>
      </Pressable>
    </Modal>
  );
}

DropdownModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  popUpSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

function DropDownItems({ title }) {
  return (
    <View style={styles.popupItem}>
      <Text style={styles.popupItemText}>{title}</Text>
    </View>
  );
}

DropDownItems.propTypes = {
  title: PropTypes.string.isRequired,
};
