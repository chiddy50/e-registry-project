<template>
  <!-- <Tutorial/> -->
  <div>

    <section class="
      custom__gradient
      tw-pt-14
      tw-pb-16
      "
      >
      <div class="tw-w-9/12 tw-mx-auto">
        <div class="tw-flex tw-justify-center">
          <img class="" src="~assets/img/clarity_angle-double-line.svg" alt="double_line">
        </div>

        <div class="
        tw-text-white
          tw-text-4xl
          tw-mt-8
        ">
          <span class="tw-pb-3">Environmental</span>
          <span class="tw-pb-3">Consultants</span>
          <span class="tw-border-b-4 tw-border-dark-yellow">Accreditation</span>
        </div>

        <div class="tw-mt-14 tw-flex tw-gap-5">
          <input type="text"
            placeholder="Search Company Name"
            class="
            tw-px-7
            tw-py-3
            tw-rounded-lg
            tw-w-1/2
            tw-bg-dark-green
            tw-text-white
            tw-border-none
            focus:tw-outline-none
            tw-placeholder-white"/>
          <div class="
          tw-px-7
          tw-py-3
          tw-rounded-lg
          tw-w-1/4
          tw-bg-dark-green
          ">
            <select class="
            tw-w-full
            tw-bg-dark-green
            tw-text-white
            tw-border-none
            focus:tw-outline-none
            tw-placeholder-white
            ">
              <option value="">Category</option>
            </select>
          </div>
          <button class="
            tw-p-3
            tw-rounded-lg
            tw-bg-green-500
            tw-text-white
            tw-w-1/4
          ">
            Search
          </button>
        </div>
      </div>
    </section>

    <section class="tw-py-14">
      <div class="tw-w-9/12 tw-mx-auto">

        <h1 class="
          tw-text-4xl
          tw-font-extrabold
          tw-mb-10
        ">
        Frequently Asked Questions.
        </h1>

        <ListItem :item="question" v-for="(question, index) in questions" :key="index"/>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'faq',
  layout: 'home',
  data() {
    return {
      questions: [
        {
          question: 'Why Environmental Consultants Acreditation??',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus quis tortor senectus lobortis ullamcorper ullamcorper. Quis sit donec amet sit praesent ac. Eu augue libero lobortis convallis.',
          open: true
        },
        {
          question: 'Why Environmental Consultants Acreditation??',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus quis tortor senectus lobortis ullamcorper ullamcorper. Quis sit donec amet sit praesent ac. Eu augue libero lobortis convallis.',
          open: false
        },
        {
          question: 'Why Environmental Consultants Acreditation??',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus quis tortor senectus lobortis ullamcorper ullamcorper. Quis sit donec amet sit praesent ac. Eu augue libero lobortis convallis.',
          open: false
        },
      ]
    }
  },
}
</script>


<style scoped>
.custom__gradient {
  background: linear-gradient(279.92deg, #097388 78.36%, #50C18D 112.5%);
}
</style>
