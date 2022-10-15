
const defaultMessageListHeight = "22";
const defaultFolderTreeHeight = "22";

function onLoad(activatedWhileWindowOpen) {
  WL.injectCSS("chrome://LargerMessageList/content/styles/largermessagelist.css");
  var gettingItem = WL.messenger.storage.sync.get(['messageListHeight', 'folderTreeHeight']);
  gettingItem.then((res) => {
    document.querySelector(':root').style.setProperty('--message-list-row-height', (res.messageListHeight || defaultMessageListHeight) + "px");
    document.querySelector(':root').style.setProperty('--folder-tree-row-height', (res.folderTreeHeight || defaultFolderTreeHeight) + "px");
    //document.querySelector(':root').style.setProperty('--message-list-row-height', (defaultMessageListHeight) + "px");
    //document.querySelector(':root').style.setProperty('--folder-tree-row-height', (defaultFolderTreeHeight) + "px");
  });

}

function onUnload(deactivatedWhileWindowOpen) {
}