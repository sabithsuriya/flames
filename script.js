function calculateFLAMES() {
    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s+/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s+/g, '');

    console.log('Name 1:', name1); // Debugging
    console.log('Name 2:', name2); // Debugging

    if (name1 === '' || name2 === '') {
        alert('Please enter both names, buddy!');
        return;
    }

    if (
        (name1.includes('sabith') || name1.includes('sabithsuriya') || name1.includes('sabeetha')) ||
        (name2.includes('sabith') || name2.includes('sabithsuriya') || name2.includes('sabeetha'))
    ) {
        alert("💖 Affection thaan!");
        return;
    }

    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];
    let combined = name1 + name2;
    let uniqueChars = [...new Set(combined.split(''))]; 
    let count = uniqueChars.reduce((acc, char) => acc + (combined.split(char).length - 1), 0); 

    console.log('Combined:', combined); // Debugging
    console.log('Unique Chars:', uniqueChars); // Debugging
    console.log('Count:', count); // Debugging

    let resultIndex = count % flames.length; 
    let result = flames[resultIndex]; 

    console.log('Result Index:', resultIndex); // Debugging
    console.log('Result:', result); // Debugging

    let emoji = '';
    switch (result) {
        case 'Friends': emoji = '😊'; break;
        case 'Love': emoji = '❤️'; break;
        case 'Affection': emoji = '😍'; break;
        case 'Marriage': emoji = '💍'; break;
        case 'Enemy': emoji = '😡'; break;
        case 'Siblings': emoji = '👫'; break;
    }

    console.log('Final Result:', `${result} ${emoji}`); // Debugging
    document.getElementById('result').innerHTML = `${result} ${emoji}`;
}
