<template>
    <div>
        <navbar-component></navbar-component>
        <div-component></div-component>
    </div>
</template>

<script>
    import NavbarComponent from '../includes/NavbarComponent';
    import DivComponent from './DivComponent';

    export default {
        components: { NavbarComponent, DivComponent },
        name: "MainComponent"
    }

</script>

<style scoped>

</style>