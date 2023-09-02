export function SnackEmoji(name: string){
  switch(name.toLowerCase()){
    case 'burger':
      return '🍔'
    case 'pizza' :
     return '🍕'
    case 'drinks' :
      return '🥤'
    case 'ice-creams' :
     return '🍨'
     default:
      return '👨🏾🔍 '
  }

}
