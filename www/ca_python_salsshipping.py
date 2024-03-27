weight = 41.5

# Ground Shipping
if weight <= 2.0:
    ground_cost = (weight * 1.50) + 20
elif (weight > 2.0) and (weight <= 6.0):
    ground_cost = (weight * 3.00) + 20
elif (weight > 6.0) and (weight <= 10.0):
    ground_cost = (weight * 4.00) + 20
else:
    ground_cost = (weight * 4.75) + 20

print("Costs for a package weighing {}".format(weight) + "lbs are:")

print("Ground shipping : ${0:.2f}".format(ground_cost))

# Premium Ground Shipping
premium_cost = 125

print("Premium ground shipping : ${0:.2f}".format(premium_cost))

# Drone Shipping
if weight <= 2.0:
    drone_cost = weight * 4.50
elif (weight > 2.0) and (weight <= 6.0):
    drone_cost = weight * 9.00
elif (weight > 6.0) and (weight <= 10.0):
    drone_cost = weight * 12.00
else:
    drone_cost = weight * 14.25

print("Drone shipping : ${0:.2f}".format(drone_cost))
