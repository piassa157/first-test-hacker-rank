function sockMerchant(n, ar) {
    
    if(n < 1)
    {
        return -1;
    }
    
    if(n > 100)
    {
        return -1;
    }
    
    let x = Object.values(ar)
    let y = x.sort(sortfunction)
    let count = 0;
    let count2 = 0;

    
    for(let i=0; i < n; i++)
    {
        if(x[i] == x[i + 1])
        {
            count = i;
            
            if(count % 2 == 0)
            {
                count2 = count2 + 1      
            }
        
        }
    }
    
    return count2
}