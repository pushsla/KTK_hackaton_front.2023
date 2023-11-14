<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <div class="logo">
        <img class="logo__img" src="/logo.svg" alt="#GEEK">
    </div>
</template>

<script lang="ts">

</script>

<style lang="postcss">
    .logo{
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translateX(-50%) translateY(-50%);

        width: 30%;
        height: 40%;
    }
    .logo__img{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1000px) {
        .logo{
            top: 8%;
            left: 7rem;
            width: 9rem;
        }
    }

    @media screen and (max-width: 480px) {
        .logo{
            display: none;
        }
    }
</style>
