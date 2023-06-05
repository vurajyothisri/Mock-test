def Zeros_move(arr):
    left=0
    for i in range(len(arr)):
        if arr[i]!=0:
            arr[left]=arr[i]
            left+=1    
    while left<len(arr):
        arr[left]=0
        left+=1
    print(arr)    



Zeros_move([0,1,0,3,12])            