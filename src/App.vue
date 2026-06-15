<template>
 <router-view></router-view>
 <div class="carousel-container">
    <ejs-carousel>
        <e-carousel-items>
            <e-carousel-item template = "<figure>
                <img src='' alt='cardinal'/>
            </figure>"></e-carousel-item>
            <e-carousel-item  template = "<figure>
                <img src='' alt='cardinal'/>
            </figure>"></e-carousel-item>
            <e-carousel-item  template = "<figure>
                <img src='' alt='cardinal'/>
            </figure>"></e-carousel-item>
            <e-carousel-item  template = "<figure>
                <img src='' alt='cardinal'/>
            </figure>"></e-carousel-item>
            <e-carousel-item  template = "<figure>
                <img src='' alt='cardinal'/>
            </figure>"></e-carousel-item>
        </e-carousel-items>
    </ejs-carousel>
 </div>
</template>
<script setup lang ="ts">
import {
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemDirective
} from "@syncfusion/ej2-vue-navigations";
export default {
    components: {
        'ejs-carousel' : CarouselComponent,
        'e-carousel-item' : CarouselItemDirective,
        'e-carousel-items' : CarouselItemDirective
        }
}
</script>
