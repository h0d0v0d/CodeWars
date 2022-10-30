function enough(cap, on, wait) {
    // your code here
    let seets = cap - on - wait
    return seets >= 0 ? 0 : -seets
}