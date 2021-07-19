def isPalindrome(number):
		if len(str(number))>1:
			return int(str(number)[::-1])==number


def generate_palindromes(limit):
	pal_list=[]
	for i in range (limit+1):
		if isPalindrome(i):
			pal_list.append(i);		
	return pal_list		

print(generate_palindromes(50))


	
	