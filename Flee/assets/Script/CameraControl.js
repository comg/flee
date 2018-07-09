cc.Class({
    extends: cc.Component,

    properties: {
        speed:50,//速度
        camera: cc.Camera,
        mapBg:cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.isStop = false;
        this.distance = 0;//距离
        this.maxDistance = this.mapBg.width - this.node.width;
    },
    update(dt){
        if(this.distance >= this.maxDistance){
            this.isStop = true;
        }
        if(!this.isStop){
            var d = this.speed * dt;
            this.node.x += d;
            this.distance += d;
        }
        
    },
    onEnable: function () {
        cc.director.getPhysicsManager().attachDebugDrawToCamera(this.camera);
    },
    onDisable: function () {
        cc.director.getPhysicsManager().detachDebugDrawFromCamera(this.camera);
    },
});