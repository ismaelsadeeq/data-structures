def sorting(array):
  n = len(array)
  for i in range(1,n):
    j = n-1
    while j>=i:
      if array[j] < array[j-1]:
        less = array[j]
        high = array[j-1]
        array[j] = high
        array[j-1] = less
      j=j-1
  return array
nums = [4,1,3,2,44,55,66,77,88,99,66,5,44,]
print(sorting(nums))

def insertionSort(array):
  n = len(array)
  for i in range(1,n):
    j = i
    while j>0:
      if array[j] < array[j-1]:
        less = array[j]
        high = array[j-1]
        array[j] = high
        array[j-1] = less
      else:
        break
      j=j-1
  return array
print(insertionSort(nums))

def selectionSort(array):
  n = len(array)
  for i in range(0,n-1):
    j = i + 1
    k = i
    while j<n:
      if array[j] < array[k]:
        k = j
        less = array[j]
        high = array[k]
        array[j] = high
        array[k] = less
  
      j=j+1
  return array
print(selectionSort(nums))