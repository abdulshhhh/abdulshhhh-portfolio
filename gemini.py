import os

print("Demo chatbot mode is enabled. No external API is configured.")

while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        break
    print(
        "Demo bot: Thanks for your question. "
        "Please use the portfolio contact or booking link for a real project discussion."
    )