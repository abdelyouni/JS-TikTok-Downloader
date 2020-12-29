# JS TikTok Downloader
Download TikTok Video or Music  & get all relative meta infos **using only JavaScript.**

## Supported links :
- www.tiktok.com/username/video/.....
- m.tiktok.com/v/.....
- vm.tiktok.com/.....

## Basic Demo
[TikTok Video & Music Downloader with only Javascript](https://abdelyouni.github.io/JS-TikTok-Downloader/demo.html "TikTok Video & Music Downloader with only Javascript")

## Example
###### Basic usage :

```html
//Import the class
<script src="src/tiktok.class.js"></script>

<script>
const TikTok = new JSTikTok('TIKTOK_VIDEO_URL');
TikTok.get().then(function(){
	//Log the video title
	console.log(TikTok.datas.video.title);
	
	//Start download
	TikTok.video_download();
});
</script>
```
#### Force Download

###### Force Download Video :
Start video download :
```
const TikTok = new JSTikTok('TIKTOK_VIDEO_URL');

TikTok.get().then(function(){

	TikTok.video_download();
	
});
```
###### Force Download Music :
Start music download :

```
const TikTok = new JSTikTok('TIKTOK_VIDEO_URL');

TikTok.get().then(function(){

	TikTok.music_download();

});
```

## Properties
#### Video Infos
| Name  | Property   |
| ------------ | ------------ |
| Video ID  | TikTok.datas.video.id  |
| Video Title  | TikTok.datas.video.title  |
|  Video Keywords | TikTok.datas.video.keywords  |
| Video Description  | TikTok.datas.video.Description  |
|  Video Height | TikTok.datas.video.height  |
| Video Duration (in secondes)  | TikTok.datas.video.duration  |
|  Video Resolution | TikTok.datas.video.sizeFormat  |
| Video Cover  | TikTok.datas.video.cover  |
|  Video Animated Cover | TikTok.datas.video.animatedCover  |
| Video Likes Count  | TikTok.datas.video.likes  |
|  Video Shares Count | TikTok.datas.video.shares  |
| Video Comments Count  | TikTok.datas.video.comments  |
|  Video Vues Count | TikTok.datas.video.vues  |
|  Video Original Url | TikTok.datas.video.original_url  |
|  Video Download Url | TikTok.datas.video.download_url  |

#### Music Infos
| Name  | Parametre  |
| ------------ | ------------ |
| Music ID  | TikTok.datas.music.id  |
| music Title  | TikTok.datas.music.title  |
|  Large size Cover | TikTok.datas.music.cover_large  |
| Medium size Cover  | TikTok.datas.music.cover_medium  |
|  Small size Cover | TikTok.datas.music.cover_small  |
| Singer (Artist)  | TikTok.datas.music.artist  |
|  Album name | TikTok.datas.music.album  |
| Duration  | TikTok.datas.music.duration  |
|  Stream URL | TikTok.datas.music.url  |
| Download URL | TikTok.datas.music.download_url  |

#### Author Infos
| Name  | Parametre  |
| ------------ | ------------ |
| Author ID  | TikTok.datas.author.id  |
| Unique ID  | TikTok.datas.author.uniqueId  |
| Username  | TikTok.datas.author.username  |
| Large size Avatar  | TikTok.datas.author.avatar_large  |
| Medium size Avatar  | TikTok.datas.author.avatar_medium  |
| Small size Avatar  | TikTok.datas.author.avatar_small  |
| Signature  | TikTok.datas.author.signature  |
| SignUp date  | TikTok.datas.author.createDate  |
| Is the profile verified ?  | TikTok.datas.author.isVerified  |
| Followers Count  | TikTok.datas.author.followers|
| Followings Count  | TikTok.datas.author.followings  |
| Likes recieved Count  | TikTok.datas.author.hearts  |
| Likes given Count  | TikTok.datas.author.diggCount  |
| Total Videos  | TikTok.datas.author.totalVideos  |
## Php Version
[TikGet - TikTok video downloader php class](https://github.com/abdelyouni/TikGet "TikGet - TikTok video downloader php class")
## License
(The MIT License)

Copyright (c) 2020 Abdel Youni

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
