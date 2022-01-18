# Smash.gg Neomax automation

## Intro

Firstly, assuming you know nothing about code, welcome to my automation script for the smash weeklies. This was created because smash.gg currently (18/01/2022) still doesn't have any way of creating a reoccuring event. And thus this script was born.

This script will log in to the appropriate Smash.gg account, fill in your forms as appropriate and leave you in a browser on the smash.gg page. 

The script will leave you on the page before it submits therefore you can review the page before submitting.

Everything is configured in `\config\` folder. 

Follow the instructions below to run this code; 

## Installation

First you'll need the appropriate tool to run this code. I recommend git bash: https://gitforwindows.org/ 

Download and install gitBash and then open git bash in the SmashAutomation folder. 

You'll need to install playwright, playwright test and playwright-cli. To do that, copy and paste the following command into git bash and press enter to run it.

```
npm install
```

Next, you'll need to create a file in the `config\` folder. Create a file in this folder called `config.json` and copy and paste the following inside of it.

```
{
    "username": "YourUserNameHere",
    "password": "YourPasswordHere",
    "tournamentTitle": "TournamentTitleHere",
    "contactEmail": "ContactEmailHere",
    "startTime": "MM/DD/YYYY HH:MM pm",
    "endTime": "MM/DD/YYYY HH:MM pm"
}
```
Now, fill in the details above into the file. 
- Username and password are your login details for smash.gg.
- tournamentTitle is the title of your tournament

Once that has finished running, you're ready to run this script in full!

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