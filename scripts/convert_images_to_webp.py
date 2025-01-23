import os
from PIL import Image

# 定义源目录和目标目录
source_dir = './public'
target_dir = './public'

# 创建目标目录（如果不存在）
os.makedirs(target_dir, exist_ok=True)

# 遍历源目录中的所有文件
for filename in os.listdir(source_dir):
    if filename.endswith(('.png', '.jpg', '.jpeg')):  # 只处理特定格式的文件
        # 打开图像文件
        with Image.open(os.path.join(source_dir, filename)) as img:
            # 构建目标文件路径
            target_file = os.path.join(target_dir, f"{os.path.splitext(filename)[0]}.webp")
            # 将图像保存为 WebP 格式
            img.save(target_file, 'webp')
            print(f"Converted {filename} to {target_file}") 