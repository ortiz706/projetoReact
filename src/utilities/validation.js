export const checkStringContainsLetter = (string, texto) =>{
    if(string !==null && texto !==null){
        return string.toString().toUpperCase().includes(texto.toUpperCase())
    }
    return false
}