class Videogame{

  constructor(title, yob){
    this.title = title;
    this.yob = yob;
  }
    
  toStringTitle(){
  
    return 'Titolo: ' + this.title + '\n';
  }
  
  toStringYop(){
  
    return 'Anno di pubblicazione: ' + this.yob + '\n';
  }
    
}