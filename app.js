const friends = ['Shelby', 'Claire', 'Lizz', 'Jared', 'Harrison'];

function song() {
    for (let i = 0; i < friends.length; i++) {
        for (let j = 99; j> 0; j--){
            if(j > 2){
                console.log(j + ' Lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + j + ' lines of code in the file');
            } else if(j == 2){
                console.log(j + 'Lines of code in the file, ' + j + 'lines of code; ' + friends[i] + 'strikes one out, clears it all out, 1 line of code in the file');
            } else {
                console.log('1 line of code in the file, 1 line of code;' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
            }
        }
    }
}
song();