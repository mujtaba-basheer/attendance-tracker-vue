<template>
    <div class="spa-body">
        <div class="nav-btns">
            <router-link to="/record" tag="span" class="nav-link" >Record</router-link>
            <router-link to="/stats" tag="span" class="nav-link" >Stats</router-link>
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import Record from './body/Record';
import Stats from './body/Stats';

export default {
    components: {
        record: Record,
        stats: Stats,
    },
}
</script>