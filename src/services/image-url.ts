export const getCroppedImageUrl=(url:string)=>{
    const index=url.indexOf('/games');
    const start = url.substring(0, index);
    const end = url.substring(index);

    return start + '/crop/600/400' + end;
}