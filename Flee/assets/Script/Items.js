// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var type = cc.Enum({
    gold : 0,
});
cc.Class({
    extends: cc.Component,

    properties: {
        type : {
            default : type.gold,
            type : cc.Enum(type)
        },
        value:10,//价值

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    //碰撞数据
    onCollisionEnter(other, self) {
            
        switch(this.type){
            case type.gold:
                console.log("拾取金币");
                this.node.destroy();
                break;
        }
    },
    // update (dt) {},
});
