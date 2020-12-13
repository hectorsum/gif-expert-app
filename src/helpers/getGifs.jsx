
export const getGifs = async(category) =>{
  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZbxJPganIx2wCWkxqGh7XxDuaGbt1rgD`;
    const data = await fetch(URL)
    .then(res => res.json())
    .then(res_data => res_data.data)
    
    const gifs = data.map( item => {
      return {
        id: item.id,
        title: item.title,
        url: item.images?.downsized_medium.url //if there are images, it returns url
      }
    })
    return gifs;
}