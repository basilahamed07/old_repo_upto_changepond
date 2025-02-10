import subprocess
subprocess.run("echo Hello, CMD!", shell=True)


github_links = []


with open(r"D:\PROJECT_1\Multi-rag-application\githublinkfile.txt", "r") as file:
    github_links = [line.strip() for line in file if line.strip()]
    print(github_links)

for trash in github_links:
    subprocess.run(f"git clone {trash}", shell=True)
