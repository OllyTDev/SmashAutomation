# Smash.gg Neomax automation

## Installation

you'll need to install playwright, playwright test and playwright-cli. To do that, run the following command.

```
npm install
```

## Running of the script
use the following command from the root folder:

``` 
npx playwright test --headed
```
The script will run, log in and create you your template weekly. Remember to:

- Update the title of the weekly with the appropriate number
- Update the start date and end date of the weeklies (the time should be correct)
- Do the capcha
- Hit create