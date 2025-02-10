import { Component } from '@angular/core';

@Component({
  selector: 'app-taggledimage',
  templateUrl: './taggledimage.component.html',
  styleUrl: './taggledimage.component.css'
})
export class TaggledimageComponent {
     first1:string = "anemi men"
     urls:string = "https://cdn.pixabay.com/photo/2023/04/30/04/29/anime-7959691_960_720.jpg"
     taggled(){  
      if(this.first1 == "anemi men"){
          this.urls = "https://qph.cf2.quoracdn.net/main-qimg-71084ba615efcd5cd00716e7613ff6c4"
          this.first1 = "anemi women"
      }
      else if(this.first1 == "anemi women"){
          this.urls = "https://cdn.pixabay.com/photo/2023/04/30/04/29/anime-7959691_960_720.jpg"
          this.first1 = "anemi men"
  }
  }
}

//https://qph.cf2.quoracdn.net/main-qimg-71084ba615efcd5cd00716e7613ff6c4
//https://cdn.pixabay.com/photo/2023/04/30/04/29/anime-7959691_960_720.jpg