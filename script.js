let infoBox = document.querySelector('.info-box');
let logo = document.querySelector('.logo');
let btn = document.querySelector('.btn');
let team = document.querySelector('.team');
let teamLogo = document.querySelector('.team-logo');
let teamName = document.querySelector('.name');
let teamCaptain = document.querySelector('.captain');
let teamWins = document.querySelector('.wins');

let iplTeams = [
    {
        team: "CSK",
        fullName: "Chennai Super Kings",
        captain: "MS Dhoni",
        wins: "5(2010, 2011, 2018, 2021, 2023), expected 2026",
        img: "./images/csklogo.jpg",
        primaryColor: "yellow",
        secondarColor: "blue"
    }, 
    {
        team: "MI",
        fullName: "Mumbai Indians",
        captain: "Hardik Pandya",
        wins: "5(2013, 2015, 2017, 2019, 2020), expected 2026",
        img: "./images/milogo.jpg",
        primaryColor: "Blue",
        secondarColor: "gold"
    }, 
    {
        team: "RCB",
        fullName: "Royal Challengers Bengaluru",
        captain: "Rajat Patidar",
        wins: "1(2025), expected 2026",
        img: "./images/rcblogo.jpg",
        primaryColor: "Red",
        secondarColor: "black"
    },
    {
        team: "KKR",
        fullName: "Kolkata Knight Riders",
        captain: "Ajinkya Rahane",
        wins: "3(2012, 2014, 2024), expected 2026",
        img: "./images/kkrlogo.jpg",
        primaryColor: "Purple",
        secondarColor: "gold"
    },
    {
        team: "SRH",
        fullName: "Sunrisers Hyderabad",
        captain: "Pat Cummins",
        wins:"1(2016), expected 2026",
        img: "./images/srhlogo.jpg",
        primaryColor: "Orange",
        secondarColor: "white"
    },
    {
        team: "RR",
        fullName: "Rajasthan Royals",
        captain: "Riyan Parag(in 2025)",
        wins: "1(2008), expected 2026",
        img: "./images/rrlogo.png",
        primaryColor: "Pink",
        secondarColor: "black"
    },
    {
        team: "GT",
        fullName: "Gujarat Titans",
        captain: "Shubman Gill",
        wins: "1(2022), expected 2026",
        img: "./images/gtlogo.png",
        primaryColor: "darkblue",
        secondarColor: "gold"
    },
    {
        team: "DC",
        fullName: "Delhi Capitals",
        captain: "Axar Patel",
        wins: "0, expected 2026",
        img: "./images/dclogo.jpg",
        primaryColor: "Blue",
        secondarColor: "red"
    },
    {
        team: "LSG",
        fullName: "Lucknow Super Giants",
        captain: "Rishabh Pant",
        wins: "0, expected 2026",
        img: "./images/lsglogo.jpg",
        primaryColor: "turquoise",
        secondarColor: "blue"
    },
    {
        team: "PBKS",
        fullName: "Punjab Kings",
        captain: "Shreyas Iyer",
        wins: "0, expected 2026",
        img: "./images/pbkslogo.png",
        primaryColor: "Red",
        secondarColor: "gold"
    }
]

btn.addEventListener("click", () => {

    let check = iplTeams[Math.floor(Math.random() * iplTeams.length)];

    logo.style.display = "none";
    teamLogo.style.display = "inline";

    team.innerHTML = check.team;
    team.style.color = check.secondarColor;

    teamName.innerHTML = `<strong>Full Name: </strong>${check.fullName}`;
    teamName.style.color = check.secondarColor;

    teamCaptain.innerHTML = `<strong>Captain: </strong>${check.captain}`;
    teamCaptain.style.color = check.secondarColor;

    teamWins.innerHTML = `<strong>Wins: </strong>${check.wins}`;
    teamWins.style.color = check.secondarColor;

    teamLogo.style.backgroundImage = `url(${check.img})`;;
    infoBox.style.backgroundColor = check.primaryColor;

})