import os
import shutil

def move_images(input_dir, output_dir):
  # Ensure the output directory exists
  os.makedirs(output_dir, exist_ok=True)

  # Walk through the input directory
  for root, _, files in os.walk(input_dir):
    for file in files:
      # Check if the file is an image
      if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff')):
        # Construct full file path
        file_path = os.path.join(root, file)
        # Move the file to the output directory
        shutil.copy(file_path, output_dir)
        print(f"Copied: {file_path} to {output_dir}")

# Example usage
input_dir = 'src/beyond the apex'
output_dir = 'src/assets/images'
move_images(input_dir, output_dir) 