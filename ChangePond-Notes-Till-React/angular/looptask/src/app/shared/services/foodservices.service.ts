import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodservicesService {

  constructor() { }
  breakfastlist=[
    
    
    {name:"idly",
      price:784378,
      photo:"https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg"
    },
    
    
    {name:"vadai",
      price:5435453,
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlpnQR3q-WShegO2fAiC6CdhO0aPEiFBpsw&s"
    },
    
    
    {name:"dasai",
      price:54665,
      photo:"https://www.subbuskitchen.com/wp-content/uploads/2023/09/cholam-dosa4.jpg"
    },
    
    {name:"poori",
      price:34545523543,
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo1SjO6Pc4r--XqFJ8KzVPYnjInEeQhLhkA&s"
    }
  ]

}
