import os

def change_indent(directory, indent_size=2):
    # Walk through the directory
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                
                # Change indentation
                new_lines = []
                for line in lines:
                    stripped_line = line.lstrip()
                    leading_spaces = len(line) - len(stripped_line)
                    new_indent = ' ' * (leading_spaces // 4 * indent_size)
                    new_lines.append(new_indent + stripped_line)
                
                # Write the updated content back to the file
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.writelines(new_lines)
                print(f"Updated indentation for file: {file_path}")

# Example usage
directory = 'src/components/beyond the apex'
change_indent(directory) 