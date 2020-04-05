# GridGen [![Link to Figma](https://img.shields.io/badge/figma-@gridgen-blueviolet)](https://www.figma.com/c/plugin/796759972238579874) [![npm Version](https://img.shields.io/npm/v/figma-gridgen)](https://www.npmjs.com/package/figma-gridgen)

Utilizes built-in Figma rectangles, lines, and texts to generate tables with neatly organized layers.

## How-To Use:

- Select one of three constraint modes (keyboard shortcuts added):
  - Cell and table size ("Alt + 1")
  - Count and cell size ("Alt + 2")
  - Count and table size ("Alt + 3")
- Modify the values in the textbox and the checkboxes
- "Create" to generate table, or "Cancel" to exit
- Supports both mouse and keyboard navigations:
  - "Tab" to go to next input
  - "Shift + Tab" to go to previous input
  - "Arrow" keys on textboxes to increase/decrease by 1
  - "Shift + Arrow" keys on textboxes to increaes/decrease by 10
  - "Enter" on checkboxes to toggle
  - "Enter" on buttons to click
  - "Shift + R" to reset input to cached values, if any
  - "Shift + C" to initiate table creation
  - Shortcuts to switch between constraint modes (see above)

## Current Capabilites:

- Supports up to 100 rows and columns
- Supports table up to 5000px by 5000px (width by height)
- Supports 3 constraint modes (with keyboard shortcuts)
  - Cell and table size
  - Count and cell size
  - Count and table size
- Enhanced UI experience with validations and loader
- With/without headers, and ability to specify header height
- When header is included, specify with/without floating filters
- Supports striped tables
- Ability to select both primary and striped colors of the table
- With/without borders, and ability to define border color
- Automated population of content and header texts
- Specify fonts family and style based on list of installed fonts
- Specify table and header font sizes
- Caching and preloading of last input
- Resetting to last cached input upon changes

## Work-in-Progress:

- Edit mode

## License:

[MIT](/LICENSE)
