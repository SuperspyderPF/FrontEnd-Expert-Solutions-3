s=a=> {
    v = a.length
   for( i = 0; i < v; i ++){
      x = i
     for ( j = i + 1; j < v; j++){
       if(a[j] < a[x]) x = j
     }
     if(x !== i){
        u = a[x]
       a[x] = a[i]
       a[i] = u
     }
   }
   return a
 }

 //one line:
 s=a=>{v=a.length;for(i=0;i<v;i++){x=i;for(j=i+1;j<v;j++){if(a[j]<a[x])x=j}if(x!==i){u=a[x];a[x]=a[i];a[i]=u;}}return a}


///[10, 7, 3, 1] [1] [10,7,3]
///[1,10,7,3] [1,3] [10,7]
///[1,3,10,7] [1,3,7] [10]
///[1,3,7,10] [1,3,7,10]
 