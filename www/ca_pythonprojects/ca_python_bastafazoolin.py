# from datetime import datetime

class Menu():
    name = ""
    items = {}
    start_time = ""
    end_time = ""

    def __init__(self, name, items, start_time, end_time):
        self.name = name
        self.items = items
        self.start_time = start_time
        self.end_time = end_time

    def __repr__(self):
        return self.name + " menu available from " + self.start_time + " to " + self.end_time

    def calculate_bill(self, purchased_items):
        total_price = 0

        for item in purchased_items:
            total_price += self.items[item]

        return total_price


brunch = Menu("Brunch", {'pancakes': 7.50, 'waffles': 9.00, 'burger': 11.00, 'home fries': 4.50, 'coffee': 1.50,
                         'espresso': 3.00, 'tea': 1.00, 'mimosa': 10.50, 'orange juice': 3.50}, "11am", "4pm")

early_bird = Menu("Early Bird", {'salumeria plate': 8.00, 'salad and breadsticks (serves 2, no refills)': 14.00,
                                 'pizza with quattro formaggi': 9.00, 'duck ragu': 17.50, 'mushroom ravioli (vegan)': 13.50,
                                 'coffee': 1.50, 'espresso': 3.00}, "3pm", "6pm")

dinner = Menu("Dinner", {'crostini with eggplant caponata': 13.00, 'caesar salad': 16.00, 'pizza with quattro formaggi': 11.00,
                         'duck ragu': 19.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 2.00, 'espresso': 3.00}, "5pm", "11pm")

kids = Menu("Kids", {'chicken nuggets': 6.50, 'fusilli with wild mushrooms': 12.00, 'apple juice': 3.00}, "11am", "9pm")

print(brunch)

print(brunch.calculate_bill(["pancakes", "home fries", "coffee"]))

print(early_bird.calculate_bill(["salumeria plate", "mushroom ravioli (vegan)"]))


class Franchise():
    address = ""
    menus = []

    def __init__(self, address, menus):
        self.address = address
        self.menus = menus

    def __repr__(self):
        print(self.address)

    def available_menus(self, time):

        # time_as_string = datetime.now().strftime("%-H")
        # time_as_string = datetime.time.strftime("%-H")
        # menu_options = ["brunch", "early bird", "dinner", "kids"]

        menu_options = []

        # time_as_string = "23"
        # print(time_as_string)
        # print(int(time_as_string))

        # if int(time_as_string) >= 11 and int(time_as_string) < 16:
        #   menu_options.append(brunch)
        # if int(time_as_string) >= 11 and int(time_as_string) < 21:
        #   menu_options.append(kids)
        # if int(time_as_string) >= 15 and int(time_as_string) < 18:
        #   menu_options.append(early_bird)
        # if int(time_as_string) >= 17 and int(time_as_string) < 23:
        #   menu_options.append(dinner)

        if int(time) >= 11 and int(time) < 16:
            menu_options.append(brunch)
        if int(time) >= 11 and int(time) < 21:
            menu_options.append(kids)
        if int(time) >= 15 and int(time) < 18:
            menu_options.append(early_bird)
        if int(time) >= 17 and int(time) < 23:
            menu_options.append(dinner)

        print(menu_options)


flagship_store = Franchise("1232 West End Road", [brunch, early_bird, dinner, kids])

new_installment = Franchise("12 East Mulberry Street", [brunch, early_bird, dinner, kids])

flagship_store.available_menus("12")

flagship_store.available_menus("17")


class Business():
    def __init__(self, name, franchises):
        self.name = name
        self.franchises = franchises


arepas_menu = Menu("Take a 'Arepa", {'arepa pabellon': 7.00, 'pernil arepa': 8.50, 'guayanes arepa': 8.00,
                                     'jamon arepa': 7.50}, "10am", "4pm")

arepas_place = Franchise("189 Fitzgerald Avenue", [arepas_menu])

basta_fazoolin = Business("Take a' Arepa", [flagship_store, new_installment])
