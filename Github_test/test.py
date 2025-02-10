from github_upload_details import Github_details
import os 
user_1 = Github_details()
checking = user_1.check_git_folder()
print(checking)

if checking == "create_init":
    os.system("Github.bat")
elif checking == "create_remote":
    os.system('Github.bat')
elif checking == "Add File":
    os.system('Github.bat')
elif checking == "commit File":
    os.system('Github.bat')


