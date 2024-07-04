// Example fee data (replace with actual fee data for each state and entity type)
const fees = {
    "Alabama": {
        "llc": 200,
        "corp": 250
    },
    "Alaska": {
        "llc": 250,
        "corp": 300
    },
    "Arizona": {
        "llc": 150,
        "corp": 200
    },
    "Arkansas": {
        "llc": 50,
        "corp": 50
    },
    "California": {
        "llc": 70,
        "corp": 100
    },
    "Colorado": {
        "llc": 50,
        "corp": 50
    },
    "Connecticut": {
        "llc": 120,
        "corp": 250
    },
    "Delaware": {
        "llc": 90,
        "corp": 89
    },
    "Florida": {
        "llc": 125,
        "corp": 78.75
    },
    "Georgia": {
        "llc": 100,
        "corp": 100
    },
    "Hawaii": {
        "llc": 51.25,
        "corp": 50
    },
    "Idaho": {
        "llc": 100,
        "corp": 100
    },
    "Illinois": {
        "llc": 150,
        "corp": 150
    },
    "Indiana": {
        "llc": 95,
        "corp": 95
    },
    "Iowa": {
        "llc": 50,
        "corp": 50
    },
    "Kansas": {
        "llc": 160,
        "corp": 90
    },
    "Kentucky": {
        "llc": 40,
        "corp": 50
    },
    "Louisiana": {
        "llc": 100,
        "corp": 75
    },
    "Maine": {
        "llc": 175,
        "corp": 145
    },
    "Maryland": {
        "llc": 150,
        "corp": 100
    },
    "Massachusetts": {
        "llc": 500,
        "corp": 275
    },
    "Michigan": {
        "llc": 50,
        "corp": 60
    },
    "Minnesota": {
        "llc": 155,
        "corp": 155
    },
    "Mississippi": {
        "llc": 50,
        "corp": 50
    },
    "Missouri": {
        "llc": 50,
        "corp": 58
    },
    "Montana": {
        "llc": 70,
        "corp": 70
    },
    "Nebraska": {
        "llc": 105,
        "corp": 100
    },
    "Nevada": {
        "llc": 75,
        "corp": 75
    },
    "New Hampshire": {
        "llc": 100,
        "corp": 100
    },
    "New Jersey": {
        "llc": 125,
        "corp": 125
    },
    "New Mexico": {
        "llc": 50,
        "corp": 100
    },
    "New York": {
        "llc": 200,
        "corp": 125
    },
    "North Carolina": {
        "llc": 125,
        "corp": 125
    },
    "North Dakota": {
        "llc": 135,
        "corp": 100
    },
    "Ohio": {
        "llc": 99,
        "corp": 99
    },
    "Oklahoma": {
        "llc": 100,
        "corp": 100
    },
    "Oregon": {
        "llc": 100,
        "corp": 100
    },
    "Pennsylvania": {
        "llc": 125,
        "corp": 125
    },
    "Rhode Island": {
        "llc": 150,
        "corp": 230
    },
    "South Carolina": {
        "llc": 110,
        "corp": 135
    },
    "South Dakota": {
        "llc": 150,
        "corp": 150
    },
    "Tennessee": {
        "llc": 300,
        "corp": 300
    },
    "Texas": {
        "llc": 300,
        "corp": 300
    },
    "Utah": {
        "llc": 70,
        "corp": 70
    },
    "Vermont": {
        "llc": 125,
        "corp": 125
    },
    "Virginia": {
        "llc": 100,
        "corp": 100
    },
    "Washington": {
        "llc": 180,
        "corp": 180
    },
    "West Virginia": {
        "llc": 100,
        "corp": 100
    },
    "Wisconsin": {
        "llc": 130,
        "corp": 100
    },
    "Wyoming": {
        "llc": 100,
        "corp": 100
    }
};

function calculateFee() {
    var state = document.getElementById('state').value;
    var type = document.getElementById('type').value;
    
    if (fees[state] && fees[state][type]) {
        var fee = fees[state][type];
        document.getElementById('result').textContent = `Fee for forming a ${type.toUpperCase()} in ${state}: $${fee}`;
    } else {
        document.getElementById('result').textContent = "Fee data not available for the selected state and entity type.";
    }
}
