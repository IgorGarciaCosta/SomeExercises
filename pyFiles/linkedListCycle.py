class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class LinkedList:
 
    # Function to initialize head
    def __init__(self):
        self.head = None
 
    # Function to insert a new
    # node at the beginning
    def push(self, new_data):
        new_node = ListNode(new_data)
        new_node.next = self.head
        self.head = new_node
 
    # Utility function to print it
    # the linked LinkedList
    def printList(self):
        temp = self.head
        while(temp):
            print(temp.data, end=" ")
            temp = temp.next

    def hasCycle(self) -> bool:
        s = set()
        temp = self.head
        while(temp):
            if(temp in s):
                return True
            s.add(temp)
            temp = temp.next

        return False        

# Driver program for testing
llist = LinkedList()
llist.push(20)
llist.push(4)
llist.push(15)
llist.push(10)
 
# Create a loop for testing
llist.head.next.next.next.next = llist.head
if(llist.hasCycle()):
    print("Loop found")
else:
    print("No Loop ")

# class Solution:
#     def hasCycle(self, head: ListNode) -> bool:
#         s = set()
#         temp = head
#         while(temp):
#             if(temp in s):
#                 return True
#             s.add(temp)
#             temp = temp.next

#         return False