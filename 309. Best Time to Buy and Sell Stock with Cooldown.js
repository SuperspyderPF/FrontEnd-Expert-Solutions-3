function maxProfit(p){
     j = 2147483647
     u = 0
     w = 0
     t = 0
    p.forEach( x =>{
        t = Math.max(w, x - j)
        j = Math.min(j, x - u)
        u = w
        w = t
    })
    return t
}

////one line:
maxProfit=p=>{j=2147483647;u=0;w=0;t=0;p.forEach(x=>{t=Math.max(w,x-j);j=Math.min(j,x-u);u=w;w=t;});return t}
