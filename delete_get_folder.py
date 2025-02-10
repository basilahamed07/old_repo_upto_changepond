import os
import shutil

def delete_git_folders(start_path="."):
    """Recursively deletes all .git folders from the given directory and its subdirectories."""
    for root, dirs, files in os.walk(start_path, topdown=True):
        if ".git" in dirs:
            git_path = os.path.join(root, ".git")
            try:
                shutil.rmtree(git_path)
                print(f"Deleted: {git_path}")
            except Exception as e:
                print(f"Failed to delete {git_path}: {e}")

delete_git_folders()
