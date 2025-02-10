function change(){
    let refarance = document.getElementById("refarance").innerHTML
    console.log(refarance)

    if(refarance == "anemi men"){
        document.getElementById("image").src="https://qph.cf2.quoracdn.net/main-qimg-71084ba615efcd5cd00716e7613ff6c4"
        document.getElementById("refarance").innerHTML="anemi women"
    }
    else if(refarance == "anemi women"){
        document.getElementById("image").src="https://cdn.pixabay.com/photo/2023/04/30/04/29/anime-7959691_960_720.jpg"
        document.getElementById("refarance").innerHTML="anemi men"
}
}