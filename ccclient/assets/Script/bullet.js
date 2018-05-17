cc.Class({
    extends: cc.Component,

    properties: {
        controller: {
            default: null,
            type: cc.Node
        },
        velocity: new cc.Vec2()
    },

    onLoad() {
        const manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
    },

    start() {

    },

    update(dt) {
        if (this.controller.getComponent("interaction").isGameRunning()) {
            const dx = this.velocity.x * dt;
            const dy = this.velocity.y * dt;
            this.node.x += dx;
            this.node.y += dy;
        }
    },

    onCollisionEnter(other, self) {
        console.log("on collision enter");

        // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        const world = self.world;

        // 碰撞组件的 aabb 碰撞框
        const aabb = world.aabb;

        // 上一次计算的碰撞组件的 aabb 碰撞框
        const preAabb = world.preAabb;

        // 碰撞框的世界矩阵
        const t = world.transform;

        // 以下属性为圆形碰撞组件特有属性
        const r = world.radius;
        const p = world.position;

        // 以下属性为 矩形 和 多边形 碰撞组件特有属性
        const ps = world.points;
    }
});
