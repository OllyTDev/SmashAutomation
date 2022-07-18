# start.gg automation

## Intro

Firstly, assuming you know nothing about code, welcome to my automation script for the smash weeklies. This was created because start.gg currently (18/01/2022) still doesn't have any way of creating a reoccuring event. And thus this script was born.

This script will log in to the appropriate start.gg account, fill in your forms as appropriate and leave you in a browser on the start.gg page. 

The script will leave you on the page before it submits therefore you can review the page before submitting.

Everything is configured in `\config\` folder. 

Follow the instructions below to run this code; 

## Installation

The below setup is only required to be done once. If you've done this before, skip to 'Running of the script'

First you'll need the appropriate tool to run this code. I recommend git bash: https://gitforwindows.org/ 

Download and install gitBash and then open git bash in where you want to install this code. Once you install gitBash you should be able to right click in a folder and select Git Bash here option. Then run the following command in git bash:

```bash
git clone https://github.com/OllyTDev/SmashAutomation.git
```
This will download the code into the folder you were just in AND will have saved it as a code repo. This means that later on if any updates occur, they can be pulled automatically.

Close that git bash and find where you saved the code you just downloaded and open git bash in the SmashAutomation folder (Right click in folder, open git bash).

Next you'll need to install node. That can be done from here: https://nodejs.org/en/download/

You'll need to install playwright, playwright test and playwright-cli. 
To do that, copy and paste the following command into git bash and press enter to run it.

```
npm install
npx playwright install
```

Next, you'll need to create a file in the `config\` folder. Create a file in this folder called `config.json` and copy and paste the following inside of it.

```
{
    "username": "YourUserNameHere",
    "password": "YourPasswordHere",
    "tournamentTitle": "TournamentTitleHere",
    "contactEmail": "ContactEmailHere",
    "startTime": "HH:MM pm",
    "endTime": "HH:MM pm",
    "dayOfWeek": "dayOfWeek"
}
```
Now, fill in the details above into the file. 
- Username and password are your login details for start.gg.
- tournamentTitle is the title of your tournament
- Day of week should be the full name of the day you run on i.e: "Monday" or "Thursday" Etc, capitalizations shouldn't matter

Once that has finished running, you're ready to run this script in full! 

## Running of the script

Copy and paste the following command into your git bash:
```
git pull
npx playwright test --headed
```

The first command will pull any updates from the code repo automatically, the second will run the script.

The script will run, log in and create you your template weekly. Remember to:

- Update the title of the weekly with the appropriate number
- Update the start date and end date of the weeklies (the time should be correct)
- Do the capcha
- Hit create
