//thirdScene.js
var ThirdLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        var label = cc.LabelTTF.create("Game Over!!", "Arial", 26);
        label.setPosition(size.width / 2, size.height *5 / 6);
        this.addChild(label, 1);
        return true;
      }
    });
    var ThirdScene = cc.Scene.extend({
      onEnter: function(){
        this._super();
        var layer = new ThirdLayer();
        this.addChild(layer);
      }
    });
