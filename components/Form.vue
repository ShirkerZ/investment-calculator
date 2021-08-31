<template>
  <div class="form">
    <form @submit.prevent>
      <div class="fields">
        <div class="field years">
          <label for="years">Years</label>
          <input
            v-model="years"
            @change="updateYears"
            name="years"
            type="number"
            placeholder="5"
            required
          />
        </div>

        <div class="field">
          <label for="interests">Interests %</label>
          <input
            v-model="interestsPercentage"
            @change="updateInterestsPercentage"
            name="interests"
            type="number"
            placeholder="10"
            required
          />
        </div>
        <div class="field">
          <label for="currency">Currency</label>
          <select name="currency" v-model="currency" @change="updateCurrency">
            <option>€</option>
            <option>$</option>
            <option>£</option>
          </select>
        </div>
      </div>

      <div class="field">
        <label for="investment">
          Monthly investment
          <span>
            The amount of money you will add to your investment balance each
            month.
          </span>
        </label>
        <input
          v-model="monthlyInvestment"
          @change="updateMonthlyInvestment"
          name="investment"
          type="number"
          placeholder="100"
          required
        />
      </div>

      <button class="submit">Calculate Income</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: null,
      interestsPercentage: null,
      monthlyInvestment: null,
      currency: "€",
    };
  },

  methods: {
    updateYears() {
      this.$store.commit("updateYears", this.years);
    },

    updateInterestsPercentage() {
      this.$store.commit(
        "updateInterestsPercentage",
        Number(this.interestsPercentage)
      );
    },

    updateMonthlyInvestment() {
      this.$store.commit(
        "updateMonthlyInvestment",
        Number(this.monthlyInvestment)
      );
    },

    updateCurrency() {
      this.$store.commit("updateCurrency", this.currency);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  padding: 1rem;
  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    .fields {
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
      gap: 2rem;

      .years {
        width: 50%;
      }
    }
    .field {
      margin: 0.7rem 0;
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 0.7rem;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        span {
          font-size: 0.7rem;
          margin-top: 0.3rem;
          color: #212121;
        }
      }

      input,
      select {
        border: none;
        border-bottom: 0.5px solid #212121;
        background: none;
        padding: 0.7rem 1.2rem;
        font-size: 1.1rem;
        width: 100%;
        outline: none;
        transition: border 0.3s ease;
        &:focus {
          border-bottom: 0.5px solid #52b69a;
        }
      }

      select {
        height: 100%;
        padding-left: 0;
      }
    }

    .submit {
      border-radius: 4rem;
      border: none;
      padding: 1.5rem;
      margin: 2rem 0;
      font-size: 1.2rem;
      font-weight: 700;
      color: white;
      background: #52b69a;
      display: none;
    }
  }
}
</style>