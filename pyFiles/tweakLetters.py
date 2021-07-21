class CustomList(list):
    def __getitem__(self, index):
        return super(CustomList, self).__getitem__(index % len(self))

def tweak_letters(txt, lst):
    
    alphabet=CustomList(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])

    #passa a palavra recebida pra lista
    wordList = []
    for n in txt:
        wordList.append(n)

    j=0
    for i in lst:
        letter = wordList[j]
        alfaIndex = alphabet.index(letter)#pega index da letra no alfab.
        newLetter = alphabet[alfaIndex+i]
        wordList[j] = newLetter
        j+=1  
    finalString = ''.join([str(item) for item in wordList])    
    return finalString
print(tweak_letters('abc', [-1, -1, -1]))