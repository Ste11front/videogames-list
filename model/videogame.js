class Videogame{

  constructor(title, yob, image){
    this.title = title;
    this.yob = yob;
    this.image = image
  }
    
  toStringTitle(){
  
    return 'Titolo: ' + this.title + '\n';
  }
  
  toStringYop(){
  
    return 'Anno di pubblicazione: ' + this.yob + '\n';
  }

  toStringImage(){
    return 'this is image' + this.image;
  }
    
}