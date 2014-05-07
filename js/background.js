var oauth = ShanbayOauth.initPage();

function logout(){
    oauth.clearToken();
}

chrome.runtime.onMessage.addListener(function(request, sender, sendReponse){
    if (request.action == 'authorize'){
        oauth.authorize(sendReponse);
    }
})
