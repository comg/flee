// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        jump:cc.Node,//跳跃
        dowm:cc.Node,//趴下
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //.开启物理系统
        var physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        //physicsManager.debugDrawFlags = true;

        cc.director.getCollisionManager().enabled = true;
        // 设置绘制标志位为 0，即可以关闭绘制。
        //cc.director.getPhysicsManager().debugDrawFlags = 1;
    },

    start(){
        this.player = this.node.getChildByName("Hero");
        this.playerCol = this.player.getComponent("HeroControl");
        this.jump.on("touchstart",e=>{
            this.Jump();
        });
        this.dowm.on("touchstart",e=>{
            this.Dowm();
        });
        this.dowm.on("touchend",e=>{
            this.Up();
        });
    },
    //跳跃
    Jump(){
        this.playerCol.Jump();
    },
    //蹲下
    Dowm(){
        this.playerCol.Dowm();
    },
    //站起来
    Up(){
        this.playerCol.Up();
    },
    // update (dt) {},
});
