function isPerfect(number) {
    for (let i = 1; i<=number; i++) {
        let one = (i/2)*(i+1)
        if (one===number) return true;
        else false;
        if (one>number) return;
    }
}
