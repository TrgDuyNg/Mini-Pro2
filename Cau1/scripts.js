function evaluateConditions(condition1, condition2, condition3, condition4)
{
    if(condition1 == true && condition2 == true )
    {
        console.log('Cả hai điều kiện đều đùng')
    }
    else if(condition3 == true || condition4 == true )
    {
        console.log('Một trong hai điều kiện thứ ba hoặc thứ tư đúng')
    }
    else
    {
        console.log('Không điều kiện nào đúng')
    }
} 

var x = evaluateConditions(1>0,1>0,1>0,1>0)