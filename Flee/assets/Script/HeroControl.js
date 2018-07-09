// game art from : https://openpixelproject.itch.io/opp2017sprites
const CameraControl = require('CameraControl');

const MOVE_LEFT = 1;
const MOVE_RIGHT = 2;

cc.macro.ENABLE_TILEDMAP_CULLING = false;

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 200,
        acceleration: 1500,
        jumps:2,
        jumpSpeed: 200,
        drag: 600
    },

    // use this for initialization
    onLoad: function () {
        this.body = this.getComponent(cc.RigidBody);
        this.isJump = false;
        this.jumpTime = 0;
        this._jumps = this.jumps;
    },

 

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var _speed = this.body.linearVelocity;
        _speed.x = this.speed;
        if (this.jumpTime > 0) {
            _speed.y = this.jumpSpeed;
            this.jumpTime--;
        }
        this.body.linearVelocity = _speed;
    },
    //跳跃
    Jump(){
        if(this.jumpTime <= 0 && this._jumps > 0){
            console.log("跳");
            this.jumpTime = 10;
            this._jumps --;
        }
        
    },
    //蹲下
    Dowm(){
        var colliders = this.getComponents(cc.PhysicsBoxCollider);
        colliders.forEach(e => {
            if(e.tag == 2){
                e.size = {width:10,height:50};
                e.apply();
                console.log(e);
            }
        });
    },
    //站起来
    Up(){
        var colliders = this.getComponents(cc.PhysicsBoxCollider);
        colliders.forEach(e => {
            if(e.tag == 2){
                e.size = {width:100,height:100};
                e.apply();

            }
        });
        
        
    },
    //碰撞数据
    onBeginContact(contact, selfCollider, otherCollider) {
        
        switch(selfCollider.tag){
            case 1:
                console.log("落地");
                this._jumps = this.jumps;
        }
    },
    //碰撞,被追上/掉下去
    onCollisionEnter(other, self) {
        switch(other.tag){
            case 101:
                console.log("被追上了");
                break;
            case 102:
                console.log("掉下去");
                break;
        }
    }
});
