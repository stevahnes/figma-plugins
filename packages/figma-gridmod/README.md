# GridMod [![Link to Figma](https://badgen.net/badge/figma/@gridmod/purple)](https://www.figma.com/community/plugin/815889316898860859) [![npm Version](https://badgen.net/npm/v/figma-gridmod?icon=npm)](https://www.npmjs.com/package/figma-gridmod)

Modifier for tables generated with GridGen.

![Artwork](https://raw.githubusercontent.com/stevahnes/figma-plugins/master/packages/figma-gridmod/media/artwork.jpg)

## How to Use:

- Select the parent group of the table and launch the plugin
  - Plugin is capable of detecting if a valid GridGen table is selected
  - If selection is changed mid-way through plugin utilization, the last selected table is remembered
- GridMod is capable of modifying:
  - The width or height of all columns/rows
  - The width or height of individual columns/rows
- Once the necessary inputs are entered, click on "Edit selected grid"
- GridMod will perform the modification, notify you, and remain open
  - This allows you to perform multiple edits consecutively without having to reopen GridMod
- Supports both mouse and keyboard navigations:
  - "Tab" to go to next input
  - "Shift + Tab" to go to previous input
  - "Arrow" keys on textboxes to increase/decrease by 1
  - "Shift + Arrow" keys on textboxes to increaes/decrease by 10
  - "Enter" or "Shift + M" on "Edit selected grid" to execute the modification

## Current Capabilites:

- Supports the following modifications of any GridGen-generated tables:
  - The width or height of all columns/rows
  - The width or height of individual columns/rows
- Persistent UI allowing consecutive executions of various modifications
- Enhanced UI experience with validations and loader

## License:

[MIT](/LICENSE)
