<template>
    <div>
        <div>
            <router-link to="/record" tag="span" >Record</router-link>
            <router-link to="/stats" tag="span" >Stats</router-link>
        </div>
        <div>
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
    }
}
</script>