let url = 'https://docs.google.com/spreadsheets/d/1_fSayzkPUbjdZAA7slZhkUNsuCf_ofeGplE2CsGiWAM/gviz/tq?';
const output = document.querySelector('.output');
const query = encodeURIComponent('Select A');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep => {
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    const row = document.createElement('me-title');
    output.append(row);
    data.table.cols.forEach((heading)=>{
        const cell = document.createElement('h1');
        cell.textContent = heading.label;
        row.append(cell);
    })
    const container = document.createElement('me-row');
    data.table.rows.forEach((main)=>{
        output.append(container);
        console.log(main.c);
        main.c.forEach((ele)=>{
            const cell = document.createElement('me-card');
            cell.textContent = ele.v;
            container.append(cell);
        })
    })
    console.log(data);
})