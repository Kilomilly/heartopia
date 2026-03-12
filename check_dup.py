import json

def check_duplicates(ordered_pairs):
    d = {}
    for k, v in ordered_pairs:
        if k in d:
            print(f"Duplicate key: {k}")
        d[k] = v
    return d

with open(r'd:\hank\heartopia\messages\th.json', 'r', encoding='utf-8') as f:
    try:
        json.load(f, object_pairs_hook=check_duplicates)
        print("No duplicates found in nested structure.")
    except Exception as e:
        print(f"Error parsing: {e}")
