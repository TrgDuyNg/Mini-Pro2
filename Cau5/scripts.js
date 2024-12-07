function complexExpression(x){
    output = ++x * 3 - x-- * 2 + --x; 
    return output;
    /* (++x) x được cộng 1 rồi sau đó mới nhân 3, (x--) vẫn 
    giữ nguyên giá trị lúc đầu để nhân 2, sau đó x giảm đi 1,
    (--x) cuối cùng x bị giảm trực tiếp một đơn vị 
    */
}

console.log(complexExpression(5)); 
    /* (++5) 5 được cộng 1 rồi sau đó mới nhân 3 (6*3), (5--) vẫn 
    giữ nguyên giá trị lúc đầu để nhân 2 (6*2), sau đó x giảm đi 1 (5),
    (--5) cuối cùng x bị giảm trực tiếp một đơn vị (4)
    PT: 6*3 - 6*2 + 4  
    */