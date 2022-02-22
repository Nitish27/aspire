<template>
  <div>
    <div class="text-right">
      <button-component
        class="show-card-number mt5 mb5"
        @btnClickHandler="showCardNumber"
      >
        <img
          class="show-card-number-icon"
          src="@/assets/images/remove_red_eye.svg"
          alt="show card number"
        />
        Show card number
      </button-component>
    </div>

    <div class="card p25 mt10 mb10">
      <div class="card-front card-part flex">
        <img
          class="card-front-company"
          src="@/assets/images/aspire-logo-1.svg"
        />
        <h2 class="card-front-username mt15 mb15">{{ card.username }}</h2>
        <div class="card-front-number">
          <input
            type="password"
            class="card-front-number-field mr20"
            :value="cardNumberMaskOne"
            maxlength="4"
            readonly
          />
          <input
            type="password"
            class="card-front-number-field mr20"
            :value="cardNumberMaskTwo"
            maxlength="4"
            readonly
          />
          <input
            type="password"
            class="card-front-number-field mr20"
            :value="cardNumberMaskThree"
            maxlength="4"
            readonly
          />
          <input
            type="text"
            class="card-front-number-visible mr20"
            :value="cardNumberMaskFour"
            maxlength="4"
            readonly
          />
        </div>
        <div class="flex">
          <div class="card-expire flex mt15 mb15 mr15 ml0">
            <span class="card-expire-label mr5">Thru:</span>
            <p class="card-expire-date">{{ card.validTill }}</p>
          </div>
          <div class="card-cvv flex mt15 mb15">
            <span class="card-cvv-label mr5">CVV:</span>
            <input
              type="password"
              class="card-cvv-number"
              :value="card.cvv"
              maxlength="4"
              readonly
            />
          </div>
        </div>

        <div class="card-type">
          <VisaIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VisaIcon from "@/components/icons/IconVisa.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  props: ["card"],
  data() {
    return {
      cardNumberMaskOne: "",
      cardNumberMaskTwo: "",
      cardNumberMaskThree: "",
      cardNumberMaskFour: "",
    };
  },
  methods: {
    showCardNumber() {
      alert("Show Card Number Clicked");
      // let fields = document.querySelectorAll(".card-front-number-field");
      // fields.forEach((field) => {
      //   field.type = "text";
      // });
    },
  },
  created() {
    if (this.card.number) {
      [
        this.cardNumberMaskOne,
        this.cardNumberMaskTwo,
        this.cardNumberMaskThree,
        this.cardNumberMaskFour,
      ] = this.card.number.split(" ");
    }
  },
  components: {
    VisaIcon,
    ButtonComponent,
  },
};
</script>
