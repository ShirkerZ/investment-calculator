<template>
  <div class="earnings">
    {{ calculateIncome }}
    <ul>
      <li class="incomes">
        <div class="income">
          <div class="label">Last month income</div>
          <div class="value">{{ lastMonthIncome }} {{ currency }}</div>
        </div>
        <div class="total-income">
          <div class="label">True Income</div>
          <div class="value">{{ totalIncome }} {{ currency }}</div>
        </div>
      </li>
      <li>
        <div class="invested-amount">
          <div class="label">Total invested amount</div>
          <div class="value">{{ totalInvestedAmount }} {{ currency }}</div>
        </div>
        <div class="balance">
          <div class="label">Balance</div>
          <div class="value">{{ balance }} {{ currency }}</div>
        </div>
      </li>

      <p>Based on current balance</p>

      <li class="expectations">
        <div>
          <div class="label">Monthly income</div>
          <div class="value">{{ monthlyIncomeExpected }} {{ currency }}</div>
        </div>
        <div>
          <div class="label">Yearly income</div>
          <div class="value">{{ yearlyIncomeExpected }} {{ currency }}</div>
        </div>
      </li>
    </ul>

    <p>
      If you start now to invest
      <span>{{ monthlyInvestment }} {{ currency }}</span> every month with an
      interest of <span>{{ interestsPercentage * 100 * 12 }} %</span> you will
      gain
      <span class="total-income">{{ totalIncome }} {{ currency }}</span>
      in <span>{{ years }}</span> years.
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      totalInvestedAmount: 0,
      lastMonthIncome: 0,
      totalIncome: 0,
      balance: 0,
      monthlyIncomeExpected: 0,
      yearlyIncomeExpected: 0,
    };
  },

  computed: {
    ...mapState([
      "years",
      "interestsPercentage",
      "monthlyInvestment",
      "currency",
    ]),

    calculateIncome() {
      let monthIncome = 0;
      let monthBalance = 0;
      let investment = 0;
      let balance = 0;
      for (let i = 0; i < this.years * 12; i++) {
        investment += this.monthlyInvestment;
        monthIncome = balance * this.interestsPercentage;
        monthBalance += monthIncome;
        balance =
          (investment + monthBalance) * this.interestsPercentage +
          investment +
          monthBalance;
      }
      this.totalInvestedAmount = investment;
      this.lastMonthIncome = monthIncome.toFixed(2);
      this.totalIncome = monthBalance.toFixed(2);

      // typeof this.balance == "number"
      //   ? (this.balance = this.balance.toFixed(2))
      //   : (this.balance = 0);
      this.balance = balance.toFixed(2);

      this.monthlyIncomeExpected = (
        this.balance * this.interestsPercentage
      ).toFixed(2);
      this.yearlyIncomeExpected = (
        this.balance *
        (this.interestsPercentage * 12)
      ).toFixed(2);
    },
  },
};
// console.log("Month N°", monthCount);
// console.log("Year N°", Math.floor(monthCount / 12));
// console.log("This Month Income", monthIncome);
// console.log("Invested", cash);
// console.log("Total Stonks", monthBalance);
// console.log("Balance", total);
</script>

<style lang="scss">
.earnings {
  padding: 1rem;
  ul {
    list-style: none;

    p {
      margin: 2rem 0 0;
      font-size: 1.5rem;
      line-height:normal
    }

    li {
      margin: 0 0 1rem;
      display: flex;
      justify-content: space-between;

      div {
        min-width: 7rem;
      }

      .label {
        font-size: 1rem;
        font-weight: 700;
        margin: 0.5rem 0;
        color: #212121;
      }

      .value {
        font-size: 1.5rem;
      }

      .total-income {
        .value {
          color: #52b69a;
        }
      }
    }
  }

  p {
    margin: 3rem 0;
    line-height: 1.3rem;
    color: #212121;
    span {
      font-weight: 700;
    }

    .total-income {
      color: #52b69a;
    }
  }
}
</style>