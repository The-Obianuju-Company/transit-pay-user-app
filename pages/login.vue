<template>
  <div class="h-screen flex flex-col">
    <div class="h-[250px] bg-gradient text-white px-4 py-5">
      <div class="flex flex-col justify-between h-full">
        <p class="text-base capitalize">back</p>
        <div class="">
          <p class="text-5xl font-semibold capitalize mb-3">Register</p>
          <p class="capitalize">create your account</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 px-4 py-5 space-y-3">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Email</span>
          <span class="label-text-alt">required</span>
        </label>
        <input
          type="email"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Password</span>
          <span class="label-text-alt">required</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </div>
      <div class="form-control w-full mt-3">
        <button @click="router.push('/dashboard')" class="btn bg-yellow-400">Submit</button>
      </div>

      <div class="divider">OR login with</div>

      <div class="my-3 w-full">
        <!-- <button class="btn my-4 w-full">Google</button> -->
        <button class="btn  btn-outline my-4 w-full">Google</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style scoped>
.bg-gradient {
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
