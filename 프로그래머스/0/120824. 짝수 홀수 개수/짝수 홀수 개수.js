function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    num_list.forEach(e => {
        e % 2 == 0 ? even += 1 : odd += 1;
    })
    
    return [even, odd];
}