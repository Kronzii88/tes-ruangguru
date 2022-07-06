let citizen = 1;


for (let day = 2; day <= 50; day++) {
    if (day % 3 == 0) {
        Math.floor(citizen /= 2)
        citizen
        console.log(`dihari ke ${day} jumlah penduduk setelah dibagi thanos : ${Math.floor(citizen)}`)
    }
    else {
        Math.floor(citizen *=3 )
        citizen 
        console.log(`dihari ke ${day} jumlah penduduk setelah ditambah dr.strange : ${Math.floor(citizen)}`)

    }
    
}



