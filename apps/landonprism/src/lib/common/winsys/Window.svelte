<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <section class="window card bg-surface-50-900-token" style="z-index:{zIndex};top:{xpos}px;left:{ypos}px;">
        <div class="window__title" on:mousedown={downMe} on:mouseup={upMe} on:mousemove={moveMe} on:mouseleave={upMe}>
            <span class="title__text">
                {title}
            </span>
            <span class="title__cross" on:click={closeMe}>X</span>
        </div>
        <div class="window__content">
            <slot />
        </div>
    </section>
</template>

<script lang="ts">
    export let title: string
    export let x: number
    export let y: number
    export let zIndex: number = 100
    export let minwrem: number = 20
    export let minhrem: number = 15

    let xpos = x
    let ypos = y
    let xclickpose = 0
    let yclickpose = 0

    let isDrag: boolean = false

    $: {
        xpos = x
        ypos = y
    }

    const moveMe = (e: MouseEvent) => {
        if (!isDrag) return

        xpos += e.clientY - yclickpose
        ypos += e.clientX - xclickpose

        xclickpose = e.clientX
        yclickpose = e.clientY
    }

    const downMe = (e: MouseEvent) => {
        isDrag = true
        xclickpose = e.x
        yclickpose = e.y
        console.log(xclickpose)
    }

    const upMe = () => {
        isDrag = false
    }

    const closeMe = () => {
        xpos = x
        ypos = y
    }
</script>

<style lang="postcss">
    .window {
        width: max-content;
        position: absolute;
        border-color: #000;
        min-width: 85%;
        min-height: 20rem;
        max-height: 21rem;
        overflow-x: hidden;
        max-width: 98%;
    }
    .window__content{
        padding: .7rem;
        min-height: 18rem;
        height: 100%;
        max-height: 100%;
        overflow-y: auto;
    }
    .window__title{
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: .15rem;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .title__text{
        font-family: 'EpilepsySans', sans;
        text-align: center;
        width: 100%;
        padding: 0 2rem;
        text-transform: uppercase;
        cursor: pointer;
    }
    .title__cross{
        font-family: 'LCD', sans;
        cursor: pointer;
    }

    @media screen and (min-width: 2000px){
        .window{
            min-height: 35rem;
            max-height: 36rem;
        }
    }
</style>
