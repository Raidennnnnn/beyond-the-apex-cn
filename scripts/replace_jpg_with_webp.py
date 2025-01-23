import os

def replace_jpg_with_webp(directory):
    # Walk through the directory
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace .jpg with .webp
                updated_content = content.replace('.jpg', '.webp')
                
                # Write the updated content back to the file
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                print(f"Updated file: {file_path}")

# Example usage
directory = 'src/components/beyond the apex'
replace_jpg_with_webp(directory) 