# 1. Append Size
# For the first code challenge, we are going to calculate the length of a list
# and then append the value to the end of the list. Here is what we need to do:

# Create a function called append_size that has one parameter named my_list.
# The function should append the size of my_list (inclusive) to the end of my_list.
# The function should then return this new list. For example, if my_list was
# [23, 42, 108], the function should return [23, 42, 108, 3] because the size of
# my_list was originally 3.


def append_size(my_list):
    return my_list + [len(my_list)]


print("Challenge 1")
# Uncomment the line below when your function is done
print(append_size([23, 42, 108]))

# 2. Append Sum
# Let’s create a function that calculates the sum of the last two elements of a
# list and appends it to the end. After doing so, it will repeat this process two
# more times and return the resulting list. You can choose to use a loop or manually
# use three lines. Here are the steps we need:

# Write a function named append_sum that has one parameter — a list named named my_list.
# The function should add the last two elements of my_list together and append the result
# to my_list. It should do this process three times and then return my_list.

# For example, if my_list started as [1, 1, 2], the final result should be [1, 1, 2, 3, 5, 8].


def append_sum(my_list):
    for i in range(3):
        my_list.append(my_list[-1] + my_list[-2])
    return my_list


print("Challenge 2")
# Uncomment the line below when your function is done
print(append_sum([1, 1, 2]))


# 3. Larger List
# Let’s say we are working with two conveyor belts that contain items represented by a
# numerical ID. If one conveyor belt contains more items than the other, then we need to
# return the ID of the last item on that belt. In the case where they have the same number
# of items, return the last item from the first conveyor belt. In our code, we can
# represent the belts using lists. Here are the steps:

# Write a function named larger_list that has two parameters named my_list1 and my_list2.
# The function should return the last element of the list that contains more elements.
# If both lists are the same size, then return the last element of my_list1.


def larger_list(my_list1, my_list2):
    len1 = len(my_list1)
    len2 = len(my_list2)

    if len1 == len2:
        return my_list1[-1]
    elif len1 > len2:
        return my_list1[-1]
    else:
        return my_list2[-1]


print("Challenge 3")
# Uncomment the line below when your function is done
print(larger_list([4, 10, 2, 5], [-10, 2, 5, 10]))
print(larger_list([4, 10, 2, 5, 7], [-10, 2, 5, 10]))
print(larger_list([4, 10, 2, 5], [-10, 2, 5, 10, 6]))

# NOTE: Provided solution (below) more efficient because there are two cases where the
# last element of list 1 is returned and I did not combine those
# def larger_list(my_list1, my_list2):
#  if len(my_list1) >= len(my_list2):
#    return my_list1[-1]
#  else:
#    return my_list2[-1]


# 4. More Than N
# Our factory produces a variety of different flavored snacks and we want to check the
# number of instances of a certain type. We have a conveyor belt full of different types
# of snacks represented by different numbers. Our function will accept a list of numbers
# (representing the type of snack), a number for the second parameter (the type of snack
# we are looking for), and another number as the third parameter (the maximum number of
# that type of snack on the conveyor belt). The function will return True if the snack we
# are searching for appears more times than we provided as our third parameter. These are
# the steps we need:

# Create a function named more_than_n that has three parameters named my_list, item, and n.
# The function should return True if item appears in the list more than n times. The
# function should return False otherwise.


def more_than_n(my_list, item, n):
    # print("Looking for item ", item, " this many times ", n)
    if my_list.count(item) > n:
        return True
    else:
        return False


print("Challenge 4")
# Uncomment the line below when your function is done
print(more_than_n([2, 4, 6, 2, 3, 2, 1, 2], 2, 3))


# 5. Combine Sort
# Finally, let’s create a function that combines two different lists together and then
# sorts them. To do this we can combine the lists with an operation and then sort using
# a function call. Here are the steps we need to use:

# Write a function named combine_sort that has two parameters named my_list1 and my_list2.
# The function should combine these two lists into one new list and sort the result. Return
# the new sorted list.


def combine_sort(my_list1, my_list2):
    combined_list = my_list1 + my_list2
    return sorted(combined_list)


print("Challenge 5")
# Uncomment the line below when your function is done
print(combine_sort([4, 10, 2, 5], [-10, 2, 5, 10]))
