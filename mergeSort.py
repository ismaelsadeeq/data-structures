def mergeSort(array,left,right):
  if left < right:
    mid = (left + right) /2
    mergeSort(array,left,mid)
    mergeSort(array,mid+1,right)
    merge(array, left, mid, right)

def merge(a, left, mid, right):
  b =[]
  bcount = 0
  lcount = left
  rcount = mid+1
  while ( (lcount <= mid) and (rcount <= right) ) :
    if ( a[lcount] <= a[rcount] ):
      b[bcount+1] = a[lcount+1]
    else:
      b[bcount+1] = a[rcount+1]
  if ( lcount > mid ):
    while ( rcount <= right ):
      b[bcount+1] = a[rcount+1]
  else:
    while ( lcount <= mid ):
      b[bcount+1] = a[lcount+1]
  bcount = 0
  for i in range (bcount,(right-left+1)):
    a[left+bcount] = b[bcount]
    bcount+=1
    
    
mergeSort([4,5,6,2,7,1],0,5)