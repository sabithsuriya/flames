function calculateFLAMES() {
    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s+/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s+/g, '');

    if (name1 === '' || name2 === '') {
        alert('Please enter both names, buddy!');
        return;
    }

    const arr1 = name1.split('');
    const arr2 = name2.split('');

    for (let i = 0; i < arr1.length; i++) {
        const idx = arr2.indexOf(arr1[i]);
        if (idx !== -1) {
            arr1.splice(i, 1);
            arr2.splice(idx, 1);
            i--;
        }
    }

    const count = arr1.length + arr2.length;

    if (count === 0) {
        document.getElementById('result').innerText = 'Both names are identical! 🔁';
        return;
    }

    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];
    let list = flames.slice();
    let index = 0;

    while (list.length > 1) {
        index = (index + count - 1) % list.length;
        list.splice(index, 1);
    }

    const result = list[0];

    let emoji = '';
    switch (result) {
        case 'Friends': emoji = '😊'; break;
        case 'Love': emoji = '❤️'; break;
        case 'Affection': emoji = '😍'; break;
        case 'Marriage': emoji = '💍'; break;
        case 'Enemy': emoji = '😡'; break;
        case 'Siblings': emoji = '👫'; break;
    }

    document.getElementById('result').innerText = `${result} ${emoji}`;
}
