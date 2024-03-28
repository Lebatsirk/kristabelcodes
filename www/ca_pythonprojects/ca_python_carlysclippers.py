# Carly's Clippers
# You are the Data Analyst at Carly’s Clippers, the newest hair salon on the block.
# Your job is to go through the lists of data that have been collected in the past
# couple of weeks. You will be calculating some important metrics that Carly can use
# to plan out the operation of the business for the rest of the month.

# You have been provided with three lists:

# hairstyles: the names of the cuts offered at Carly’s Clippers.
# prices: the price of each hairstyle in the hairstyles list.
# last_week: the number of purchases for each hairstyle type in the last week.
# Each index in hairstyles corresponds to an associated index in prices and last_week.

# For example, The hairstyle "bouffant" has an associated price of 30 from the prices list,
# and was purchased 2 times in the last week as shown in the last_week list. Each of these
# elements are in the first index of their respective lists.

hairstyles = ["bouffant", "pixie", "dreadlocks", "crew", "bowl", "bob", "mohawk", "flattop"]

prices = [30, 25, 40, 20, 20, 35, 50, 35]

last_week = [2, 3, 5, 8, 4, 4, 6, 2]

# Create a variable total_price, and set it to 0.

total_price = 0

# Loop through the prices list and add each price to the variable total_price.

for price in prices:
    total_price += price

# After your loop, create a variable called average_price that
# is the total_price divided by the number of prices.

average_price = total_price / len(prices)

# Print the value of average_price

print("Average Haircut Price:", average_price)

# Use a list comprehension to make a list called new_prices,
# which has each element in prices minus 5.

new_prices = [price - 5 for price in prices]

# Print new_prices.

print(new_prices)

# Create a variable called total_revenue and set it to 0.

total_revenue = 0

# Use a for loop to create a variable i that goes from 0 to len(hairstyles)
# Add the product of prices[i] (the price of the haircut at position i)
# and last_week[i] (the number of people who got the haircut at position i)
# to total_revenue at each step.

for i in range(0, len(hairstyles)):
    total_revenue += prices[i] + last_week[i]

# After your loop, print the value of total_revenue

print("Total Revenue:", total_revenue)

# Find the average daily revenue by dividing total_revenue by 7.
# Call this number average_daily_revenue and print it out.

average_daily_revenue = total_revenue / 7

print(average_daily_revenue)

# Use a list comprehension to create a list called cuts_under_30 that has the entry hairstyles[i]
# for each i for which new_prices[i] is less than 30.
# You can use range() in your list comprehension to make i go from 0 to len(new_prices) - 1.

cuts_under_30 = [hairstyles[i] for i in range(0, len(new_prices) - 1) if new_prices[i] < 30]

# Print cuts_under_30

print(cuts_under_30)
