## Demo
<img src="https://raw.githubusercontent.com/mycvvn/react-native-accordion/master/demo/demo.gif" width="360">

## Installation
Yarn:
```sh
$ yarn add @tickid/react-native-accordion
```
or NPM:
```sh
$ npm i @tickid/react-native-accordion --save
```

## Usage
Sample code to use this simple library:
```jsx
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Accordion, Panel } from '@tickid/react-native-accordion';

export default class AccordionExample extends Component {
  render() {
    return (
      <Accordion>
        <Panel title="Panel #1">
          <Text>Content of panel #1</Text>
        </Panel>

        <Panel title="Panel #2">
          <Text>Content of panel #2</Text>
        </Panel>

        <Panel title="Panel #3">
          <Text>Content of panel #3</Text>
        </Panel>
      </Accordion>
    );
  }
}
```

## Props:

## `<Accordion>`
| Property | Type | Default | Description |
|-------------|----------|--------------|----------------------------------------------------------------|
| `containerStyle`     | `Style` |  | Styles are applied to wrap of library. (optional)|
| `panelContainerStyle`     | `Style` |  | Styles are applied to each panel. (optional)|
| `showChevron`     | `Boolean` | `true` | Hide / show the panel opening / closing icon. (optional)|
| `iconSize`     | `Number` | `18` | Size of chevron icon. (optional)|
| `iconColor`     | `String` | `#999` | Color of chevron icon. (optional)|
| `expandMultiple`     | `Boolean` | `false` | Allow more than one section to be expanded. Defaults to false. (optional)|


## `<Panel>`
| Property | Type | Default | Description |
|-------------|----------|--------------|----------------------------------------------------------------|
| `title`     | `String` |  | The title of the panel. (required)|
| `containerStyle`     | `Style` |  | Styles are applied to panel (override `panelContainerStyle` of `<Accordion />`). (optional)|
| `onOpen`     | `Function` |  | Called when panel was opened. (optional)|
| `onClose`     | `Function` |  | Called when panel was closed. (optional)|