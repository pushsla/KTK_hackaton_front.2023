<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <div class="pr">
        <span class="h5 title">{program.title}</span>
        <ul class="ul">
            {#each program.entries as e}
                <li class="li">
                    <span class="time">{e.time.getHours()}:{`${e.time.getMinutes()}`.padStart(2, '0')}</span>
                    <span class="ambule">{e.ambule}</span>
                </li>
            {/each}
        </ul>
    </div>
</template>

<script lang="ts">
    export let program: {
        id: number,
        date: Date,
        title: string,
        entries: {id: number, ambule: string, preambule: string | null, postambule: string | null, programId: number, time: Date, locale: string}[]
    }
</script>

<style lang="postcss">
    .ul{
        padding: 0 2rem;
    }
</style>
