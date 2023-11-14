<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <div class="counter">
        <span class="h1" class:closed={timeSec <= 0}>
            {`${days}`.padStart(2, "0")}:{`${hours}`.padStart(2, "0")}:{`${mins}`.padStart(2, "0")}:{`${secs}`.padStart(2, "0")}
        </span>
    </div>
</template>

<script lang="ts">
    import { onMount } from "svelte";

    let timeSet: boolean = false
    let timeSec: number = 1000000
    let days = 0
    let hours = 0
    let mins = 0
    let secs = 0

    $: {
        let accum = timeSec
        days = Math.floor(accum / (24*3600))
        accum = accum % (24*3600)
        hours = Math.floor(accum / 3600)
        accum = accum % 3600
        mins = Math.floor(accum / 60)
        secs = accum % 60
    }

    const countdown = () => {

        if (timeSec <= 0) {
            timeSec = 1
        }

        if (timeSet){
            timeSec -= 1
            setTimeout(() => countdown(), 1000)
        }
        else {
            timeSec -= 1
            setTimeout(() => countdown(), 1)
        }

    }

    onMount(async () => countdown())
</script>

<style lang="postcss">
    .counter{
        width: 100%;
        text-align: center;
        margin: 1rem;
    }
    .closed{
        color: rgb(var(--color-error-500))
    }
</style>
