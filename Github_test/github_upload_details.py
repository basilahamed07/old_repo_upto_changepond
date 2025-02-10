import os
import time

class Github_details:
    permission = open("Github.bat","w")
    
    
    
    def create_init(self):
        print("inside the crate init")
        create_git = "git init"
        self.permission.write(create_git)
        time.sleep(2)
        return "create_init"
    
    
    
    
    def create_remote(self):
        print("inside the remote")
        remote_link = input("Enter the Remote Link:")
        self.permission.write(remote_link)
        time.sleep(2)
        return "create_remote"
    
    
    def add_all(self):
        self.permission.write("git add .")
        time.sleep(2)
        return "Add File"
    
    def commit_file(self):
        commit = input("Enter the commit command")
        self.permission.write("git commit -m","",commit,"")
        time.sleep(2)
        return "commit File"

    
    
    def check_git_folder(self):
        if os.path.exists(".git"):
            if os.path.exists(".git/config"):
                open_permission = open(".git/config","r")
                check = (open_permission.read().split())
                flage = False
                for trash in check:
                    if trash == "url":
                        flage = True
                if flage == True:
                    adding = self.add_all()
                    return adding
                elif flage == False:
                    remote = self.create_remote()
                    return remote
                        
        else:
            values = self.create_init()
            return values
        
