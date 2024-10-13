
# Input Pincode Web Component
![input code image.](pincode.png)

The `input-pincode` is a customizable web component designed to capture multi-character input such as a PIN code. It supports various customization options like length, only-numbers mode, initial focus, and error handling.

## Keyboard Navigation
Backspace: Deletes the content of the current input and moves to the previous input.<br/>
Arrow Keys: Navigate between the input fields.<br/>
Enter: Triggers the onEnter event if the pincode is completed.
## Pasting Functionality
You can paste a pincode (e.g., 1234) directly into the component, and the input fields will automatically be populated.
## Props
| Prop                  | Type    | Default | Description                                                                                   |
|-----------------------|---------|---------|-----------------------------------------------------------------------------------------------|
| `length`              | Number  | `4`     | The number of input fields, i.e., the number of characters the PIN accepts.                   |
| `initializeInputFocus` | Boolean | `true`  | Automatically sets focus on the first input when the component is mounted.                    |
| `onlyNumbers`          | Boolean | `true`  | Restricts the input fields to accept only numeric characters.                                 |
| `disabled`             | Boolean | `false` | Disables the pincode input fields.                                                            |
| `hasError`             | Boolean | `false` | Indicates whether the pincode is in an error state; when true, it displays an error style.    |
| `placeholder`          | String  | `''`    | Placeholder character for each input field, displayed as a single character in each field.     |

## Installation

Install via npm or yarn:

```bash
npm install input-pincode
```

Or with yarn:
```bash
yarn add input-pincode
```


## Usage
Include the web component in your HTML or React project:
### HTML 
```html
<input-pincode length="4" only-numbers initialize-input-focus></input-pincode>
```
### REACT 
```js
import { InputPincode } from 'input-pincode/react';

<InputPincode length={4} onlyNumbers={true} initializeInputFocus={true} />
```


## Events
**Change:** Dispatched when the value of the pincode changes. The event details include the isCompleted and value properties:

**Enter:** Fired when the Enter key is pressed, dispatching the pincode value and its completion status.
```js
element.addEventListener('Change', (e) => {
    const { isCompleted, value } = e.detail;
    console.log('Pincode is complete:', isCompleted);
    console.log('Pincode value:', value);
});
```


## API

### General CSS Customization

You can customize the appearance of the entire component by modifying the default variables. These variables affect the overall look of the pincode input fields, regardless of their state.


In addition to the default variables, you can customize the appearance of the component for specific states: `valid`, `has-error`, and `disabled`. Each state has a corresponding variable suffix, such as `--valid`, `--has-error`, or `--disabled`, allowing for more granular control over the styles.



## List of CSS Variables

| Variable                                    | Default Value               | Description                                                   |
|---------------------------------------------|-----------------------------|---------------------------------------------------------------|
| `--wc-input-pincode-container--gap`         | `none`                      | Gap between input fields.                                      |
| `--wc-input-pincode-container--justify-content` | `space-between`           | Justify content setting for the input fields container.        |
| `--wc-input-pincode--padding`               | `0`                         | Padding inside the pincode input field.                        |
| `--wc-input-pincode--margin`                | `0%`                        | Margin around the pincode input field.                         |
| `--wc-input-pincode--font-weight`           | `600`                       | Font weight of the text inside the input.                      |
| `--wc-input-pincode--outline`               | `0px`                       | Outline width of the input when focused.                       |
| `--wc-input-pincode--border-width`          | `1.5px`                     | Width of the border surrounding the input.                     |
| `--wc-input-pincode--border-style`          | `solid`                     | Border style of the input.                                     |
| `--wc-input-pincode--border-radius`         | `0.5rem`                    | Border radius of the input field.                              |
| `--wc-input-pincode--border-color`          | `#d9d9d9`                   | Border color of the input field.                               |
| `--wc-input-pincode--height`                | `3.81rem`                   | Height of each pincode input field.                            |
| `--wc-input-pincode--width`                 | `3.63rem`                   | Width of each pincode input field.                             |
| `--wc-input-pincode--text-color`            | `#21272a`                   | Text color of the input content.                               |
| `--wc-input-pincode--background`            | `transparent`               | Background color of the input field.                           |
| `--wc-input-pincode--font-size`             | `2rem`                      | Font size of the text inside the input.                        |
| `--wc-input-pincode--font-family`           | `'Montserrat', sans-serif`   | Font family of the text inside the input.                      |
| `--wc-input-pincode--line-height`           | `2.5rem`                    | Line height of the text inside the input.                      |

### State-Specific Variables

#### Valid State (`--valid`)

| Variable                                       | Default Value               | Description                                                   |
|------------------------------------------------|-----------------------------|---------------------------------------------------------------|
| `--wc-input-pincode--border-color--valid`      | `#0079c8`                   | Border color when the input is valid.                          |
| `--wc-input-pincode--padding--valid`           | Same as default             | Padding inside the input field when valid.                     |
| `--wc-input-pincode--font-size--valid`         | Same as default             | Font size when the input is valid.                             |
... etc
#### Error State (`--has-error`)

| Variable                                       | Default Value               | Description                                                   |
|------------------------------------------------|-----------------------------|---------------------------------------------------------------|
| `--wc-input-pincode--border-color--has-error`  | `#d60023`                   | Border color when the input is in error state.                 |
| `--wc-input-pincode--padding--has-error`       | Same as default             | Padding inside the input field when there is an error.         |
| `--wc-input-pincode--background--has-error`    | Same as default             | Background color when the input is in error state.             |
...etc
#### Disabled State (`--disabled`)

| Variable                                       | Default Value               | Description                                                   |
|------------------------------------------------|-----------------------------|---------------------------------------------------------------|
| `--wc-input-pincode--border-color--disabled`   | `#d9d9d9`                   | Border color when the input is disabled.                       |
| `--wc-input-pincode--background--disabled`     | `#f8f8f8`                   | Background color when the input is disabled.                   |
...etc

## Usage Example

### Default Customization

```css
input-pincode {
    --wc-input-pincode--border-color: #0000ff;
    --wc-input-pincode--font-size: 1.5rem;
}
```

### State-Specific Customization

```css
input-pincode {
    --wc-input-pincode--border-color--valid: #00ff00;
    --wc-input-pincode--border-color--has-error: #ff0000;
}
```

With these options, you can fully customize the appearance and behavior of the `input-pincode` component based on its state (valid, error, disabled), or modify the default styles for a more consistent look.
