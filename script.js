// Color schemes for random theme switching
const colorSchemes = [
    {
        name: 'nature',
        forestGreen: '#2d5016',
        sage: '#87a96b',
        skyBlue: '#a8dadc',
        sand: '#f1faee',
        earthBrown: '#8b7355'
    },
    {
        name: 'ocean',
        forestGreen: '#1a4c96',
        sage: '#4a90e2',
        skyBlue: '#87ceeb',
        sand: '#f0f8ff',
        earthBrown: '#2e5984'
    },
    {
        name: 'sunset',
        forestGreen: '#8b4513',
        sage: '#cd853f',
        skyBlue: '#ffa500',
        sand: '#fff8dc',
        earthBrown: '#a0522d'
    },
    {
        name: 'forest',
        forestGreen: '#0f3b0f',
        sage: '#228b22',
        skyBlue: '#90ee90',
        sand: '#f5fffa',
        earthBrown: '#556b2f'
    }
];

let currentThemeIndex = 0;

function changeColorScheme() {
    currentThemeIndex = (currentThemeIndex + 1) % colorSchemes.length;
    const selectedScheme = colorSchemes[currentThemeIndex];
    
    document.documentElement.style.setProperty('--forest-green', selectedScheme.forestGreen);
    document.documentElement.style.setProperty('--sage', selectedScheme.sage);
    document.documentElement.style.setProperty('--sky-blue', selectedScheme.skyBlue);
    document.documentElement.style.setProperty('--sand', selectedScheme.sand);
    document.documentElement.style.setProperty('--earth-brown', selectedScheme.earthBrown);
}

// Dog images
const dogImages = ['images/fifi.jpg', 'images/lucy.jpg', 'images/ruby.jpg'];
let currentDogIndex = -1;

function showNextDog() {
    currentDogIndex = (currentDogIndex + 1) % dogImages.length;
    const dogImage = document.getElementById('dogImage');
    const dogContainer = document.getElementById('dogImageContainer');
    
    dogImage.src = dogImages[currentDogIndex];
    dogContainer.style.display = 'block';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to theme button when it's created
    const themeButton = document.getElementById('themeButton');
    if (themeButton) {
        themeButton.addEventListener('click', changeColorScheme);
    }
    
    // Add event listener to surprise button
    const surpriseButton = document.getElementById('surpriseButton');
    if (surpriseButton) {
        surpriseButton.addEventListener('click', showNextDog);
    }
});