<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      ref="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="title"></slot>
            <button
              type="button"
              class="btn-close"
              @click="closeModal()"
              aria-label="Close"
            ></button>
          </div>
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {Modal} from "bootstrap";
export default {
  name: "ModalComponent",
  data() {
    return {
      myModal: null,
    }
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      if (this.myModal) {
        this.myModal.hide();
        this.$emit("hideModal");
      }
    },
  },
    mounted() {
        this.myModal = new Modal(this.$refs.exampleModal)
    },
    watch: {
    showModal(newValue) {
      // console.log("showModal", newValue, oldValue);
      if (newValue) {
        this.myModal.show();
      }
    },
  },
};
</script>

<style scoped></style>
