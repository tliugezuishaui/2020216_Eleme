<template>
	<div id="app">
    	<!-- 路由渲染位置 -->
    	<router-view/>
    	<!-- 底部导航 -->
		<FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
	</div>
</template>

<script>
// 引入组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
	// 注册组件
	components: { FooterGuide },
	// name: 'App'
}
</script>

<style>

</style>
