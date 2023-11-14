<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->


<template>
    <ul class="ul">
        {#each speakers as sp}
            <li class="li">
                <span class="ambule">{sp.name}</span>
                <span class="postambule">{sp.company}</span>
            </li>
        {/each}
    </ul>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"

    export let speakers: {id: number, name: string, company: string}[] = []

</script>

<style lang="postcss">
    .ul{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: .3rem;
    }
    .li {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 3fr 2fr;
    }
    .postambule{
        color: rgb(var(--color-primary-500));
        text-transform: uppercase;
        font-size: 1.2rem;
        margin-right: .3rem;
    }
    .ambule{
        text-transform: uppercase;
        font-size: 1.2rem;
    }
</style>
