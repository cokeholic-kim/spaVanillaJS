export default function Post($container){
    this.$container = $container;
    this.setState = () =>{
        this.render()
    }
    this.render = ()=>{
        this.$container.innerHTML = `
        <main class="postPage">
        Post페이지 입니다
        </main>
        `
    }
    this.render();
}