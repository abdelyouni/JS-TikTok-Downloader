/**
 * JS tiktok downloader
 * @version 1.0.0
 * @author  Abdel Youni <abdelyouni@gmail.com>
 * @see     https://github.com/abdelyouni/JS-TikTok-Downloader
 */
class JSTikTok {
    constructor(url) {
      this.url = url;
      this.datas = null;
    }
    bypassCorsHeaders = "https://cors-tiktok.herokuapp.com/?u="; //Bypass CORS (Github : https://github.com/abdelyouni/cors-tiktok)

    urlencode(str) {
        str = (str + '').toString();
        return encodeURIComponent(str)
            .replace('!', '%21')
            .replace('\'', '%27')
            .replace('(', '%28')
            .replace(')', '%29')
            .replace('*', '%2A')
            .replace('%20', '+');
    }
    force_download(url,title,format){
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function(e) {
            var blob = xhr.response;
            const fileName = title+'.'+format;
            if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
                window.navigator.msSaveOrOpenBlob(blob, fileName);
            } else { // for others
                var url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            };
        };
        xhr.send();		 
    }

    get = async () => {
        var patterns = ['<link data-react-helmet="true" rel="canonical" href="','"/>','>','</','id="__NEXT_DATA__"']
        var tiktokUrl = this.bypassCorsHeaders + this.urlencode(this.url);
        var resp =  await fetch(tiktokUrl).then(response => response.text()).then((data) => { return data; });
        
        if (resp.includes(patterns[0])) {
            tiktokUrl = resp.split(patterns[0])[1].split(patterns[1])[0];
            resp =  await fetch(this.bypassCorsHeaders + this.urlencode(tiktokUrl)).then(response => response.text()).then((data) => { return data; });
        }
        
        var json = JSON.parse(resp.split(patterns[4])[1].split(patterns[3])[0].split(patterns[2])[1]);

        var video = {
            id:json.props.pageProps.itemInfo.itemStruct.video.id,
            height:json.props.pageProps.itemInfo.itemStruct.video.height,
            duration:json.props.pageProps.itemInfo.itemStruct.video.duration,
            sizeFormat:json.props.pageProps.itemInfo.itemStruct.video.ratio,
            cover:json.props.pageProps.itemInfo.itemStruct.video.cover,
            animatedCover:json.props.pageProps.itemInfo.itemStruct.video.dynamicCover,
            likes:json.props.pageProps.itemInfo.itemStruct.stats.diggCount,
            shares:json.props.pageProps.itemInfo.itemStruct.stats.shareCount,
            comments:json.props.pageProps.itemInfo.itemStruct.stats.commentCount,
            vues:json.props.pageProps.itemInfo.itemStruct.stats.playCount,
            title:json.props.pageProps.metaParams.title,
            keywords:json.props.pageProps.metaParams.keywords,
            description:json.props.pageProps.metaParams.description,
            original_url:json.props.pageProps.metaParams.canonicalHref,
            download_url:json.props.pageProps.itemInfo.itemStruct.video.downloadAddr,
        };

        var music = {
            id:json.props.pageProps.itemInfo.itemStruct.music.id,
            title:json.props.pageProps.itemInfo.itemStruct.music.title,
            cover_large:json.props.pageProps.itemInfo.itemStruct.music.coverLarge,
            cover_medium:json.props.pageProps.itemInfo.itemStruct.music.coverMedium,
            cover_small:json.props.pageProps.itemInfo.itemStruct.music.coverThumb,
            artist:json.props.pageProps.itemInfo.itemStruct.music.authorName,
            album:json.props.pageProps.itemInfo.itemStruct.music.album,
            duration:json.props.pageProps.itemInfo.itemStruct.music.duration,
            url:json.props.pageProps.itemInfo.itemStruct.music.playUrl,
        };

        var author = {
            id:json.props.pageProps.itemInfo.itemStruct.author.id,
            uniqueId:json.props.pageProps.itemInfo.itemStruct.author.uniqueId,
            username:json.props.pageProps.itemInfo.itemStruct.author.nickname,
            avatar_large:json.props.pageProps.itemInfo.itemStruct.author.avatarLarger,
            avatar_medium:json.props.pageProps.itemInfo.itemStruct.author.avatarMedium,
            avatar_small:json.props.pageProps.itemInfo.itemStruct.author.avatarThumb,
            signature:json.props.pageProps.itemInfo.itemStruct.author.signature,
            createDate:json.props.pageProps.itemInfo.itemStruct.author.createTime,
            isVerified:json.props.pageProps.itemInfo.itemStruct.author.verified,
            followers:json.props.pageProps.itemInfo.itemStruct.authorStats.followerCount,
            followings:json.props.pageProps.itemInfo.itemStruct.authorStats.followingCount,
            hearts:json.props.pageProps.itemInfo.itemStruct.authorStats.heart,
            totalVideos:json.props.pageProps.itemInfo.itemStruct.authorStats.videoCount,
            diggCount:json.props.pageProps.itemInfo.itemStruct.authorStats.diggCount,
        };

        this.datas = {video:video,music:music,author:author};
        

    }
    download_music = async () => {
        if(this.datas == null){
            await this.get();
        }
        this.force_download(this.bypassCorsHeaders + this.urlencode(this.datas.music.url) + "&d=1",this.datas.music.id,'mp3');
    }
    download_video = async () => {
        if(this.datas == null){
            await this.get();
        }
        this.force_download(this.bypassCorsHeaders + this.urlencode(this.datas.video.download_url) + "&d=1",this.datas.video.id,'mp4');
    }


}
