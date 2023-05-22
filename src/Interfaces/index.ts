export interface Icolor{
    r:number | 0,
    g:number | 0,
    b:number | 0,
}

export interface Iingredient{
    name: string,
    id: string,
    // x: number,
    // y: number,
    // width: number,
    // height: number,
    srcImg: string,
    color: Icolor,
    step: number,
}

export const defaultColor:Icolor = {
    r:0,
    g:0,
    b:0,
}

export interface rgb{
    r:number,
    g:number,
    b:number,
}

export interface hsl{
    h:number,
    s:number,
    l:number,
}