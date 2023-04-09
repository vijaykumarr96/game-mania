
//this function will reduce the image sizes coming from api
export const getCroppedImageUrl = (url:string) => {
    // console.log(url)
    const target = "media/"
    const index = url.indexOf(target) + target.length;
    const newImageUrl = url.slice(0,index) + "crop/600/400/" + url.slice(index)
    // console.log(newImageUrl)
    return newImageUrl;
}