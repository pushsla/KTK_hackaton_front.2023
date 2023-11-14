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
        {#if back}
            <Window title={back} x={30} y={30}>
                <slot name="back" />
            </Window>

        {/if}

        <Window title={main} x={60} y={60}>
            <slot name="main" />
        </Window>

        {#if front}
            <Window title={front} x={90} y={90}>
                <slot name="front" />
            </Window>

        {/if}
    </div>
</template>

<script lang="ts">
    import Window from "./Window.svelte"

    export let back: string | undefined = undefined
    export let front: string | undefined = undefined
    export let main: string

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
