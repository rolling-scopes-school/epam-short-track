# GOOD PRACTICES THAT YOU CAN APPLY FOR THIS TASK:


1. Place css files in the folder with the component.

```
src
|
|- components
   |
   |-Header
     |-Header.jsx //component
     |-header.css //styles for this component
```


2. Use label tag for input. [Link to the W3C](https://www.w3schools.com/tags/tag_label.asp).
3. Use key attribute for list rendering. [Link to the documentation](https://legacy.reactjs.org/docs/lists-and-keys.html).
4. Use constants to avoid a hardcode. For example, when passing string properties to a component:

```
// BAD
<Button text='Search' />


// GOOD
//constants.js
const BUTTON_TEXT = 'Search';

//Button.jsx
import {BUTTON_TEXT} from './constants.js';

<Button text={BUTTON_TEXT} />
```

5. Add empty string between import groups. Example:
import from '[node_modules]'
 
import from '[own_components]'
import from '[constants]'
 
import from '[styles]'

6. Use common index.js file for components and helpers. [Link to the article](https://www.digitalocean.com/community/tutorials/react-index-js-public-interfaces).
7. If component does not have any logic you can return the markup immediately. 
```
import React from 'react';

import logo from '../../assets/logo.jpg';

export const Logo = () => <img src={logo} />;

or

import React from 'react';

export const Button = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
);
```