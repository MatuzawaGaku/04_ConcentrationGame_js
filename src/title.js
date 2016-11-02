var titleLayer = cc.Layer.extend({
  ctor : function() {
    this._super();
    var size = cc.director.getWinSize();

    var title = cc.Sprite.create(res.title_png);
    title.setPosition(size.width/2, size.height/2);
    title.setScale(1,1);
    this.addChild(title);

    var text = cc.LabelTTF.create("お疲れ様です。プロデューサーさん!\nこちらではアイドル達の可愛い姿が見れる\n神経衰弱ゲームが楽しめますよ","Arial","32");
    this.addChild(text);
    text.setScale(0.7,0.7);
    text.setPosition(250,70);

    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: this.onTouchBegan,
      onTouchMoved: this.onTouchMoved,
      onTouchEnded: this.onTouchEnded
  }, this);

  return true;
},

onTouchBegan: function(touch, event) {
  return true;
},
onTouchMoved: function(touch, event) {},
onTouchEnded: function(touch, event) {
  // 次のシーンに切り替える
  cc.director.runScene(new gameScene());
},
});
var titleScene = cc.Scene.extend({
onEnter : function() {
  this._super();
  var layer = new titleLayer();
  this.addChild(layer);
  }
});
