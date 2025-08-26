def wordProg():
    parag = input("Enter a paragraph: ").strip()
    
    if not parag:
        print("Kindly enter a paragraph")
        return
    
    # Split words
    words = parag.split()
    paragObj = {}
    
    # Count frequencies in a single loop
    for word in words:
        paragObj[word] = paragObj.get(word, 0) + 1
    
    # Print frequency of each word
    for word, count in paragObj.items():
        print(f"Word '{word}' appears {count}")
    
    print("\nUnique words:")
    for word, count in paragObj.items():
        if count == 1:
            print(word)
    
    # Most frequent word(s)
    max_count = max(paragObj.values())
    most_frequent = [word for word, count in paragObj.items() if count == max_count]
    
    print("\nMost frequent word(s):", ", ".join(most_frequent))


wordProg()
