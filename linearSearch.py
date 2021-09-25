a = [1,3,5,6,7,8,9]

def linearSearch(a,x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1

print(linearSearch(a,10))

def binarySearch(a,x):
    i = 0
    size = len(a) - 1
    while i <= size:
        middleNumber = (i + size) // 2
        if a[middleNumber] == x:
            return middleNumber
        elif a[middleNumber] < x:
            i = middleNumber + 1
        else:
            size = middleNumber - 1
    return -1

print(linearSearch(a,10))
