document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').style.padding ='10px 20px'
document.querySelector('button').style.marginLeft ='10px'

document.querySelector('button').addEventListener('click',function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n')
    console.log(rows);

    for (const [i,row] in rows.entries()) {
        const [first,second] = row.toLowerCase().trim().split('__');

        const output = `${first} ${second.replace(
            second[0] , second[0].toUpperCase
        )}`;
        console.log(`${output.padEnd(20)} ${'✔'.repeat(i+1)}`);
    }
})