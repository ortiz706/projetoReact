export const titles ={
    home: "Músicas Favoritas",
    admin: "Visualize o resultado"
}

export function selectTitle(router){
    const title = titles[router];
    if(title) {
        return titles.home;
    }
    return title;
}