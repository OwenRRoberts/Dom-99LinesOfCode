document.addEventListener('DOMContentLoaded', button);
function button() {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Just like Benny Goodman...SING SING SING');
    button.appendChild(btnText);
    document.body.appendChild(button);
    console.log('line 7');

    //wait for...that button clickity click
    document.addEventListener('click', click);
    function click() {
        for (let i = 0; i < friends.length; i++) {
            let div = document.createElement('div');  //making a div 
            div.className = 'friend'; //setting div class

            let h3 = document.createElement('h3');
            let h3Text = document.createTextNode(friends[i]);
            h3.appendChild(h3Text);
            div.appendChild(h3);
            console.log('line 19');

            for (let j = 99; j > 0; j--); {
                let p = document.createElement('p');  //make that p element
                let pText;
                if (j > 2) {
                    pText = document.createTextNode(j + ' Lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + j + ' lines of code in the file');
                } else if (j == 2) {
                    pText = document.createTextNode(j + 'Lines of code in the file, ' + j + 'lines of code; ' + friends[i] + 'strikes one out, clears it all out, 1 line of code in the file');
                } else {
                    pText = document.createTextNode('1 line of code in the file, 1 line of code;' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
                }
                console.log('line 32');

                p.appendChild(pText);
                div.appendChild(p);
            }
            document.body.appendChild(div);
        }
    }
}



const friends = ['Shelby', 'Claire', 'Lizz', 'Jared', 'Harrison']; //friends array
function song() {
    for (let i = 0; i < friends.length; i++) {
        for (let j = 99; j > 0; j--) {
            if (j > 2) {
                console.log(j + ' Lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + j + ' lines of code in the file');
            } else if (j == 2) {
                console.log(j + 'Lines of code in the file, ' + j + 'lines of code; ' + friends[i] + 'strikes one out, clears it all out, 1 line of code in the file');
            } else {
                console.log('1 line of code in the file, 1 line of code;' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
            }
        }
    }
}
song();