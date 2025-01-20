import os

def convert_html_to_react(html_file_path, output_dir):
  # Read the HTML file
  with open(html_file_path, 'r', encoding='utf-8') as file:
    html_content = file.read()

  # Convert HTML to JSX
  jsx_content = html_content.replace('class=', 'className=')

  # Create a React component
  component_name = os.path.splitext(os.path.basename(html_file_path))[0]
  # Remove index_ prefix if present
  component_name = component_name.split('_', 1)[-1]
  component_name = component_name.split(' ')
  component_name = ''.join(word.capitalize() for word in component_name)
  component_name = component_name.replace('-', '')
  component_name = component_name.replace('_', '')
  print(component_name)

  # Capitalize each word in the component name
  react_component = f"""const {component_name} = () => (
    <>
      {jsx_content}
    </>
  );

  export default {component_name};
  """

  # Write the React component to a file
  output_file_path = os.path.join(output_dir, f"{component_name}.tsx")
  with open(output_file_path, 'w', encoding='utf-8') as file:
    file.write(react_component)

  # print(f"React component created at: {output_file_path}")

def process_directory(input_dir, output_dir):
  for root, _, files in os.walk(input_dir):
    for file in files:
      if file.endswith('.html'):
        html_file_path = os.path.join(root, file)
        convert_html_to_react(html_file_path, output_dir)

# Example usage
input_dir = 'src/beyond the apex'
output_dir = 'src/components/beyond the apex'
process_directory(input_dir, output_dir)