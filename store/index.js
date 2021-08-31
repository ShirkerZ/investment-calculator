export const state = () => ({
    years: 0,
    interestsPercentage: 0,
    monthlyInvestment: 0,
    currency: '€'
})

export const mutations = {
    updateYears(state, payload) {
        state.years = payload || 0
    },

    updateInterestsPercentage(state, payload) {
        state.interestsPercentage = payload / 100 / 12 || 0
    },

    updateMonthlyInvestment(state, payload) {
        state.monthlyInvestment = payload || 0
    },

    updateCurrency(state, payload) {
        console.log("Currency", payload)
        state.currency = payload
        console.log("state c", state.currency)
    },

}