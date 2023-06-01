<template>
    <div>
        <h1>Morning Face</h1>
        <p>{{text}}</p>
        <button @click="show = true" class="btn btn-primary">Open QrStream</button>
        <QrStream v-if="show" @decode="onDecode($event)" class="pb"></QrStream>
    </div>
</template>

<script setup lang="ts">
const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] })

// Start the vibration, it will automatically stop when the pattern is complete:
vibrate()

import { QrStream } from 'vue3-qr-reader';
// const camera = usePermission('camera')

const text = ref("")
const show = ref(false)
 function onDecode(e){
    console.log(e);
    text.value = e;
 }

onMounted(() => {
    // console.log(camera.value)

    setTimeout(() => {
        getLocalStream();
    },4000)
})


function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
    //   window.localStream = stream; // A
    //   window.localAudio.srcObject = stream; // B
    //   window.localAudio.autoplay = true; // C
    console.log(stream);
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    });
}



</script>

<style scoped>

</style>