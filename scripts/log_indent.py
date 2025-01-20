import os

def log_indent(directory):
    # Walk through the directory
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                
                # Log indentation
                indent_counts = []
                for line in lines:
                    stripped_line = line.lstrip()
                    leading_spaces = len(line) - len(stripped_line)
                    if leading_spaces > 0:
                        indent_counts.append(leading_spaces)
                
                if indent_counts:
                    # Calculate the most common indent size
                    common_indent = max(set(indent_counts), key=indent_counts.count)
                    print(f"File: {file_path} - Common indent size: {common_indent} spaces")
                else:
                    print(f"File: {file_path} - No indentation found")

# Example usage
directory = 'src/components/beyond the apex'
log_indent(directory) 