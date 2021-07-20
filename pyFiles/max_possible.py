def max_possible(n1, n2):
    # convert n2 to descending list
    descN2List = []
    descendingN2 = "".join(sorted(str(n2), reverse=True))
    for n in descendingN2:
        descN2List.append(n)
    print(descN2List)

    # convert n1 to descending list
    listN1 = []
    descendingN1 = "".join(sorted(str(n1), reverse=True))
    for num in str(n1):
        listN1.append(num)
    print(listN1)

    k = 0
    for i in range(len(listN1)):
        #print("iteration: "+str(listN1[j])+"--"+descN2List[i])
        for k in range(len(descN2List)):
            if int(listN1[i]) < int(descN2List[k]):
                aux =  listN1[i]
                listN1[i] = int(descN2List[k])
                descN2List[k] = aux
    print(listN1)
    print(descN2List)


max_possible(8732, 91255)
