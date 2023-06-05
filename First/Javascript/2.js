function Unique_letter(word){
for(let i=0;i<word.length;i++){
    count=0
    for(let j=0;j<word.length;j++){
        if(word[i]==word[j]){
            count=count+1
        }
       
    }
    if(count==1){
        return i
    }
}
return -1
}


value=Unique_letter("aabb")
console.log(value);