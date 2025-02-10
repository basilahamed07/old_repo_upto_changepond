import os
class Github_details:
    
    
    
    def create_init(self):
        print("inside the crate init")
        create_git = "git init"
        os.system(create_git)
    
    def create_remote(self):
        print("You Dont Have the remote Link")
        remote_link = input("Enter the Remote Link:")
        os.system(remote_link)
        self.add_all()
    
    
    def add_all(self):
        os.system("git add .")
        self.commit_file()
    
    def commit_file(self):
        commit = input("Enter the commit command")
        os.system(f"git commit -m '{commit}'")

    
    
    def check_git_folder(self):
        if os.path.exists(".git"):
            open_permission = open(".git/config","r")
            check = (open_permission.read().split())
            flage = False
            for trash in check:
                if trash == "url":
                    flage = True
                    break
            if flage == True:
                self.add_all()
            elif flage == False:
                remote = self.create_remote()
                return remote
        else:
            values = self.create_init()
            return values
        
user_1 = Github_details()
checking = user_1.check_git_folder()
print(checking)
