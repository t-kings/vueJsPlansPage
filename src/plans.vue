<template>
  <div>
       <section>
        <div class="flexTable">
            <div class="tableTop">
                <div class="no_display">
                    <h1>Plan <br />Features</h1>
                </div>
                <div>
                    <h2>Bronze</h2>
                    <div>
                        <h1>&#8358; 500</h1>
                        <p>Per month</p>
                    </div>
                    <a href="#">Activate</a>
                    
                    <img class="no_display_wide" src="./assets/images/angle-down.svg" alt="arrow" />
                    <div class="plan_list">
                        <h2>
                            <h1>Plan <br />Features</h1>
                        </h2>
                        <div v-for="plan in plans">
                            <div>{{plan.plan}}</div>
                            <div v-html="plan.bronze"></div>
                        </div>

                    </div>
                </div>
                <div>
                    <h2>Silver</h2>
                    <div>
                        <h1>&#8358; 2,000</h1>
                        <p>Per month</p>
                    </div>
                    <a href="#">Activate</a>

                    <img class="no_display_wide" src="./assets/images/angle-down (1).svg" alt="arrow" />
                    <div class="plan_list_silver">
                        <h2>
                            <h1>Plan <br />Features</h1>
                        </h2>
                        <div v-for="plan in plans">
                            <div>{{plan.plan}}</div>
                            <div v-html="plan.silver"></div>
                        </div>

                    </div>
                </div>
                <div>
                    <h2>Gold</h2>
                    <div>
                        <h1>&#8358; 2,500</h1>
                        <p>Per month</p>
                    </div>
                    <a href="#">Activate</a>
                    <img class="no_display_wide" src="./assets/images/angle-down (2).svg" alt="arrow" />
                    <div class="plan_list">
                        <h2>
                            <h1>Plan <br />Features</h1>
                        </h2>
                        <div v-for="plan in plans">
                            <div>{{plan.plan}}</div>
                            <div v-html="plan.gold"></div>
                        </div>

                    </div>
                </div>
            </div>

            <div  class="no_display" v-for="plan in plans">
                <div>
                    {{plan.plan}}
                </div>
                <div v-html="plan.bronze">
                </div>
                <div v-html="plan.silver">
                </div>
                <div v-html="plan.gold">
                </div>
            </div>
        
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'plans',
  data () {
    return {
      plans:[
          {plan:'Loan', bronze:'<h2>50k - 150k Naira </h2>', silver:'<h2>50k - 2M Naira </h2>', gold:'<h2>50k - 4M Naira </h2>'},
          {plan:'Investment', bronze:'<img src="./src/assets/images/check (2).svg" alt="check"/>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Smart Travel Savings', bronze:'<img src="./src/assets/images/check (2).svg" alt="check"/>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Security', bronze:'<img src="./src/assets/images/check (2).svg" alt="check"/>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Bank Statement', bronze:'<h2>200k - 400k Naira </h2>', silver:'<h2>200k - 1M Naira </h2>', gold:'<h2>200k - 1M Naira </h2>'},
          {plan:'Visa', bronze:'<img src="./src/assets/images/check (2).svg" alt="check"/>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Ticket', bronze:'<img src="./src/assets/images/check (2).svg" alt="check"/>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Escort', bronze:'<p class="clear"> . </p>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Eight Free Country Destination', bronze:'<h2>Just 1 </h2>', silver:'<h2>Just 3 </h2>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Tour Package', bronze:'<img src="./src/assets/images/check (2).svg" alt="check"/>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Hotel Reservation', bronze:'<img src="./src/assets/images/check (2).svg" alt="check"/>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'24/7 Customer Success Expert', bronze:'<p class="clear"> . </p>', silver:'<p class="clear"> . </p>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Travel Shows', bronze:'<img src="./src/assets/images/check (2).svg" alt="check"/>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Event', bronze:'<p class="clear"> . </p>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Games', bronze:'<p class="clear"> . </p>', silver:'<p class="clear"> . </p>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Gold Investor', bronze:'<p class="clear"> . </p>', silver:'<h2>Silver Investor</h2>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Start Up', bronze:'<p class="clear"> . </p>', silver:'<p class="clear"> . </p>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'GIve a Medal', bronze:'<img src="./src/assets/images/check (2).svg" alt="check"/>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
          {plan:'Cargo', bronze:'<img src="./src/assets/images/check (2).svg" alt="check"/>', silver:'<img src="./src/assets/images/check.svg" alt="check"/>', gold:'<img src="./src/assets/images/check (1).svg" alt="check"/>'},
      ]
    }
  }
}
</script>