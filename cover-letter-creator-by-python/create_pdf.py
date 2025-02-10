#setFont = listes [Times-Bold,Times-Roman,Helvetica,Courier-BoldOblique,Courier,DarkGardenMK]

from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
import os
#CREATING PDF 
def create_pdf():
    #collecting an informaction
    hr_name = input("Enter the Hr_name: ")
    company = input("Enter the company name: ")
    email_id_hr = input("Enter the hr email_id: ")
    
    #create a permission
    output_file_name = input("Enter the output name with extension: ")
    c = canvas.Canvas(output_file_name, pagesize=letter)

    #creating a main letter
    c.setFillColor(colors.orangered)
    c.setFont("Times-Bold", 16 )
    c.drawString(50, 720, "Hello!")
    
    #decelearing my name
    c.setFillColor(colors.black)
    c.setFont("Times-Bold", 14 )
    c.drawString(50, 700, f"I'm Basil Ahamed")

    #decelaring my infromaction
    c.setFillColor(colors.gray)
    c.setFont("Courier-BoldOblique" ,10)
    c.drawString(450, 720, "Chennai")
    c.drawString(450, 705, "+917397061751")
    c.drawString(450, 690, "basilahamed46gmail.com")

    #decelaring HR informaction
    c.setFillColor(colors.gray)
    c.setFont("Courier-BoldOblique", 10 )
    c.drawString(50, 660, hr_name)
    c.drawString(50, 645, company)
    c.drawString(50, 630, email_id_hr)

    #CREATING AN INFORMACTION OF ME AND ABOUT ME
    c.setFillColor(colors.black)
    c.setFont("Times-Bold", 10 )
    c.drawString(50, 600, F"Dear {hr_name},")
    
    #passage 1
    c.setFont("Times-Roman", 10 )
    c.drawString(50, 585, f"I am writing to express my genuine interest in the Python developer or any other Fresher Role at {company}.")
    #passage 2
    c.drawString(50, 555 ,f"my name is basil ahamed and I recently earned my BE in Computer Science Engineering. I am reaching out to convey my ")
    c.drawString(50, 540 ,f"enthusiasm for contributing my diverse skill set to your dynamic team.")

    #passage 3
    c.drawString(50, 510 ,f"My technical expertise are Python, SQL, and web technologies, including HTML, CSS, and JavaScript , cloud computing")
    c.drawString(50, 490 ,f"(aws(EC2, IAM, AMI, VPC)). In addition, I possess a strong foundation in Cyber Security and Linux administration.")
    #passage 4
    c.drawString(100, 465 ,f" ⚫ In my academic journey is the development of a chat-bot for my final project")
    c.drawString(100, 450 ,f" ⚫ Also, I hold a certification from Harvard in the Introduction to Python , coursera IBM cyber security")
    c.drawString(110, 435 , "  for everyone. Etc…..")
    c.drawString(100, 420 ,f" ⚫ also finish the task in the Harvard CS50 Duck program out of 10,000 members across the world")

    #passage 4
    c.drawString(50, 390 ,f"I'm drawn to {company} .My skills align with the job requirements, and I'm eager to contribute my tech passion to your")
    c.drawString(50, 375 ,f"innovative projects.")

    #passage 5
    c.drawString(50, 345 ,f"Excited to contribute to {company}, I'm open for a detailed discussion on how my background aligns with your organization's goals.")
    
    #passage 6
    c.drawString(50, 315 ,f"Reach me at +917397061751 or basilahamed46@gmal.com . I'll follow up next week for further discussion.")
    
    #passage 7
    c.drawString(50, 285 ,f"Thank you for considering my application.")
    
    #singnature

    c.drawString(50, 235 ,f"Sincerelt,")
    c.setFont("Times-Bold", 15)
    c.drawString(50, 215 ,f"Basil Ahamed")


    """image_path = os.path.join(os.getcwd(), "back.jpeg")
    c.drawImage(image_path ,500, 700, width=2480, height=3508)
    """

    #save the pdf
    c.save()

if __name__ == "__main__":
    create_pdf()
