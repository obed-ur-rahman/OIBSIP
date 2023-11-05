import hashlib

# Dictionary to store registered users and their hashed passwords
users = {}

def register():
    username = input("Enter username: ")
    password = input("Enter password: ")
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    users[username] = hashed_password
    print(f"User '{username}' registered successfully!")

def login():
    username = input("Enter username: ")
    password = input("Enter password: ")
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    if users.get(username) == hashed_password:
        print(f"Welcome, {username}!")
        access_secured_page()
    else:
        print("Invalid username or password.")

def access_secured_page():
    print("You have accessed the secured page!")

# Main loop
while True:
    print("\nMenu:")
    print("1. Register")
    print("2. Login")
    print("3. Exit")
    choice = input("Enter your choice (1/2/3): ")

    if choice == '1':
        register()
    elif choice == '2':
        login()
    elif choice == '3':
        break
    else:
        print("Invalid choice. Please try again.")

