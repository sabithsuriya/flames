// Import Firestore functions
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Initialize Firestore
const db = getFirestore(); 

function calculateFLAMES() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();

    if (name1 === '' || name2 === '') {
        alert('Please enter both names, buddy!');
        return;
    }

    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];
    let combined = name1 + name2;
    let uniqueChars = [...new Set(combined.split(''))]; 
    let count = uniqueChars.reduce((acc, char) => acc + (combined.split(char).length - 1), 0); 
    let resultIndex = count % flames.length;
    let result = flames[resultIndex];

    let emoji = '';
    switch (result) {
        case 'Friends': emoji = '😊'; break;
        case 'Love': emoji = '❤️'; break;
        case 'Affection': emoji = '😍'; break;
        case 'Marriage': emoji = '💍'; break;
        case 'Enemy': emoji = '😡'; break;
        case 'Siblings': emoji = '👫'; break;
    }

    document.getElementById('result').innerHTML = `${result} ${emoji}`;

    // Get user's IP address and store data in Firebase
    try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        const userIP = data.ip;

        await addDoc(collection(db, "flames_results"), {
            name1: name1,
            name2: name2,
            result: result,
            ipAddress: userIP,
            timestamp: new Date() // Add timestamp for record-keeping
        });

        console.log("Data stored successfully in Firestore!");
    } catch (error) {
        console.error("Error saving data to Firestore:", error);
    }
}
