<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <div class="windowsys">
        {#each windows as w, i}
            <Window title={w.title} x={currx*i + currx} y={curry*i + curry}>
                <svelte:fragment>
                    {w.content || ""}
                </svelte:fragment>
            </Window>
        {/each}
    </div>
</template>

<script lang="ts">
    import Window from "./Window.svelte"

    export let windows: {title: string, content?: Element}[] = []

    let currx = 30
    let curry = 30

</script>

<style lang="postcss">
    .windowsys {
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>
