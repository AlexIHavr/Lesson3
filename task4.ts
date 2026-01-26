for (let i = 100, j = 1; i >= -j; i -= j, j++) {
    if (i >= 0){
    console.log(i);
    } 
    else {
        console.log(0);
        break;
    }
}
