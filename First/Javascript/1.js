function Zero_moves(nums){
    left=0
    for(number of nums){
        if(number!=0){
            nums[left]=number
            left=left+1
        }
    }
    while(left<nums.length){
        nums[left]=0
        left=left+1
    }
    return nums
}

value=Zero_moves([0,1,0,3,12])
console.log(value);

