const { test, expect } = require('@playwright/test');  

var json = require('../config/config.json');

function getDayFromConfig(dayOfWeek) {
  switch (dayOfWeek.toLowerCase()) {
    case "monday":
      dayAsNumber = 1;
      break;
    case "tuesday":
      dayAsNumber = 2;
      break;
    case "wednesday":
      dayAsNumber = 3;
      break;
    case "thursday":    
      dayAsNumber = 4;
      break;
    case "friday":    
      dayAsNumber = 5;
      break;   
    case "saturday":    
      dayAsNumber = 6;
      break;   
    case "sunday":    
      dayAsNumber = 7;
      break;       
  }
  return dayAsNumber;
}

function createSmashGGDate(d) {

  if(d.getMonth().toString.length == 1){
      var month = d.getMonth()+1 
      month = "0" + month 
  } else {
      var month = d.getMonth()+1
  }

  if(d.getDate().toString.length == 1) {
      var date = "0" + d.getDate()
  } else {
      var date = d.getDate()
  }
  
  var x = month + "/" + date + "/" + d.getFullYear()
  return x
}

var date = new Date();
date.setDate(date.getDate() + (7 - date.getDay()) % 7 + getDayFromConfig(json.dayOfWeek));

var dateOfNextEvent = createSmashGGDate(date)
var startDate = dateOfNextEvent + " " + json.startTime
var endDate = dateOfNextEvent + " " + json.endTime

test('Automatic neomax event page', async ({ page }) => {
  test.setTimeout(300000);
  // Go to https://smash.gg/
  await page.goto('https://smash.gg/');
  // Click div[role="button"]
  await page.click('div[role="button"]');
  // Click [placeholder="john.smith@gmail.com"]
  await page.click('[placeholder="john.smith@gmail.com"]');
  // Fill [placeholder="john.smith@gmail.com"]
  await page.fill('[placeholder="john.smith@gmail.com"]', json.username);
  // Click [placeholder="Password"]
  await page.click('[placeholder="Password"]');
  // Fill [placeholder="Password"]
  await page.fill('[placeholder="Password"]', json.password);
  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://smash.gg/' }*/),
    page.click('button:has-text("Login")')
  ]);
  // Click text=Organize an event
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://smash.gg/create' }*/),
    page.click('text=Organize an event')
  ]);
  // Click text=Create a tournament
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://smash.gg/create/tournament' }*/),
    page.click('text=Create a tournament')
  ]);
  // Click [placeholder="My Awesome Tournament"]
  await page.click('[placeholder="My Awesome Tournament"]');
  // Fill [placeholder="My Awesome Tournament"]
  await page.fill('[placeholder="My Awesome Tournament"]', json.tournamentTitle);
  // Click [placeholder="hello@smash.gg"]
  await page.click('[placeholder="hello@smash.gg"]');
  // Fill [placeholder="hello@smash.gg"]
  await page.fill('[placeholder="hello@smash.gg"]', json.contactEmail);
  // Click [placeholder="mm/dd/yyyy hh:mm (a|p)m"]
  await page.click('[placeholder="mm/dd/yyyy hh:mm (a|p)m"]');
  // Fill [placeholder="mm/dd/yyyy hh:mm (a|p)m"]
  await page.fill('[placeholder="mm/dd/yyyy hh:mm (a|p)m"]', startDate);
  // Click text=End Date *End Date >> [placeholder="mm/dd/yyyy hh:mm (a|p)m"]
  await page.click('text=End Date *End Date >> [placeholder="mm/dd/yyyy hh:mm (a|p)m"]');
  // Fill text=End Date *End DateDate is required >> [placeholder="mm/dd/yyyy hh:mm (a|p)m"]
  await page.fill('text=End Date *End Date >> [placeholder="mm/dd/yyyy hh:mm (a|p)m"]', endDate);
  // Click text=Copy Tournament Settings
  await page.click('text=Copy Tournament Settings');
  // Click text=Search for tournament
  await page.click('text=Search for tournament');
  // Click text=Neomax 2022 #2 - Nottingham Smash Bros weekly
  await page.click('text=Neomax 2022 #5 - Nottingham Smash Bros weekly');
  await new Promise(r => setTimeout(r, 290000));
  // ---------------------
});
