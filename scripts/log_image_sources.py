import os
import re

def log_and_update_image_sources(directory):
    # Regular expression to match <img> tags and capture the src attribute
    img_tag_pattern = re.compile(r'<img\s+[^>]*src=["\']([^"\']+)["\']', re.IGNORECASE)

    # Walk through the directory
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Find all matches of the <img> tag
                    matches = img_tag_pattern.findall(content)
                    imports = []
                    for match in matches:
                        # Extract the image file name
                        image_name = os.path.basename(match)
                        # Create a variable name from the image file name
                        variable_name = os.path.splitext(image_name)[0]
                        # Prepare the import statement
                        imports.append(f'import {variable_name} from "../../assets/images/{image_name}";')
                        # Replace src in the content
                        content = content.replace(f'src="{match}"', f'src={{ {variable_name} }}')

                    # Add import statements at the top of the file
                    if imports:
                        import_statements = '\n'.join(imports) + '\n\n'
                        content = import_statements + content

                # Write the updated content back to the file
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated file: {file_path}")

# Example usage
directory = 'src/components/beyond the apex'
log_and_update_image_sources(directory) 