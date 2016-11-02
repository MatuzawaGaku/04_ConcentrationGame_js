//thirdScene.js
var ThirdLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        var gameover = cc.Sprite.create(res.gameover_png);
        gameover.setPosition(150 , 200);
        gameover.setScale(1,1);
        this.addChild(gameover);

        var label = cc.LabelTTF.create("臓器で一番売れる場所\n知ってます?\n心臓です♡")
        label.setPosition(400, 200);
        label.setScale(1,1);
        this.addChild(label, 1);
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
        cc.director.runScene(new titleScene());
      },
    });
    var ThirdScene = cc.Scene.extend({
      onEnter: function(){
        this._super();
        var layer = new ThirdLayer();
        this.addChild(layer);
      }
    });
