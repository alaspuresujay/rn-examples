# File Structure

We have 3 files here:

```
└───Dropdown
│   │   Dropdown.jsx          // Main component
|   |   DropdwonPopup.jsx         // popup list
|   |   Styles.js  // All styling
```

1. `Dropdown.jsx`
   This file containes main Component and logic for dropdown.

2. `DropdownPopup.jsx`
   This file contains popup list. and Event handlers for list items.

3. `Styles.js`
   This file contains all styling for dropdown and popup list.

# How to use

1. Import `Dropdown` component from `/Dropdown.jsx`

```js
import Dropdown from './Dropdown';
```

2. Use `Dropdown` component in your code

```jsx
<Dropdown
  label="Dropdown"
  placeholder="Select or Enter"
  onChangeText={(text) => console.log(text)}
  options={rawData}
  value={rawData[0].value}
/>
```

# Props

| Prop         | Type     | Default | Description                               |
| ------------ | -------- | ------- | ----------------------------------------- |
| label        | string   | -       | Label for dropdown                        |
| placeholder  | string   | -       | Placeholder for dropdown                  |
| onChangeText | function | -       | Callback function for text change         |
| options      | array    | -       | Array of [Options](#options) for dropdown |
| value        | string   | -       | Value for dropdown                        |
| isRequired   | boolean  | false   | If true, dropdown will be required        |

### options

```
{ id: number, value: string },
```
