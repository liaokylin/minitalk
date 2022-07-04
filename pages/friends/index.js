import { friendsData } from './friends';
Page({
  data : {
    cities : []
  },
  onShow() {
    console.log('on show')
    this.getTabBar().setData({
      current: 'friends'
    })
  },
  onChange(event){
    console.log(event.detail,'click right menu callback data')
  },
  onReady(){
    let storeFriends = new Array(26);
    const words = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    words.forEach((item,index)=>{
      storeFriends[index] = {
        key : item,
        list : []
      }
    })
    friendsData.forEach((item)=>{
      let firstName = item.pinyin.substring(0,1);
      let index = words.indexOf( firstName );
      storeFriends[index].list.push({
        name : item.name,
        key : firstName
      });
    })

    this.data.friends = storeFriends;
    this.setData({
      friends : this.data.friends
    })
  },
});
