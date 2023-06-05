def unique_letter(word):
    for i in range(len(word)):
        count=0
        for j in word:
            if word[i]==j:
                count=count+1
        if count==1:
            return i
    return -1




value=unique_letter("aabb")
print(value)