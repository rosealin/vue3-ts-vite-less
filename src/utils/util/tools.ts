import { ref } from 'vue';
export const modalBox = {
    setup() {
        const num = ref('1')
        return {
            num
        }
    },
    template: `
    <div>
    <div>{{num}}</div>
    <div>这是一个弹窗</div>
    </div>
    `
}